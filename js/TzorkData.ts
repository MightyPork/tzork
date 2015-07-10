/// <reference path="TzResolver.ts" />
/// <reference path="Utils.ts" />
/// <reference path="data_default_profile.ts" />


module Tzork {
    /** Geo point */
    export interface Point {
        name:string;
        tz:string;
        color:string;
        show:boolean;
        _tz?:string;
        _t?:number;
        _valid?:boolean;
    }


    /** Tzork profile - settings and geo points */
    export interface Profile {
        title:string;
        showTitle:boolean;

        innerColor:string;
        innerImage:string;

        outerColor:string;
        outerImage:string;

        fgColor:string;

		labelShadows?:boolean;
		labelHoverBg?:string;

        points:Point[];

        _valid?:boolean;
    }


    /** Strip a transient stuff from profile */
    export function stripProfile(p: Profile): Profile {
        // clone the data
        p = JSON.parse(JSON.stringify(p));

        // remove transient stuff
        delete p._valid;
        p.points.forEach((gp) => {
            delete gp._t;
            delete gp._tz;
            delete gp._valid;
        });

        return p;
    }


    /** Create empty profile */
    export function createEmptyProfile(): Profile {
        return <Profile>{
            title: 'Tzork Profile',
            showTitle: true,
            innerImage: 'images/bg-earth.jpg',
            innerColor: '',
            outerImage: '',
            outerColor: '#0B1A2E',
            fgColor: '',
			labelShadows: true,
			labelHoverBg: null, // nothing -> use default
            points: [
				{
					name: '@MightyPork',
					tz: 'Europe/Prague',
					color: 'orange',
					show: true
				}
			]
        };
    }

    /** Create default profile */
    export function createDefaultProfile(): Profile {
        return JSON.parse(JSON.stringify(tz_def_profile));
    }


    /** A profile & config provider */
    export interface Repository {
        profiles: Profile[];

        activeProfile: number;

        /** Load & parse profiles and prepare repository for use */
        load(onDone?: () => void): void;

        /** Parse profiles array. Automatically called by load()! */
        parse(onDone?: () => void): void;

        /** Persist current state */
        store(onDone?: () => void): void;

		getActiveProfile(): Profile;
    }


    /** Repository loaded/saved from/to localStorage */
    export class LocalRepository implements Repository {
        profiles: Profile[] = [];
        activeProfile: number = 0;

		getActiveProfile(): Profile {
			return this.profiles[this.activeProfile];
		}

        load(onDone?: ()=>void) {
            // Load repository
            try {
                var s = localStorage['repository'];
                if (s != null) {
                    var j = JSON.parse(s);
                    this.profiles = <Profile[]> j.profiles || [];
                    this.activeProfile = parseInt(j.active);
                }
            } catch (e) {
                console.error('Error reading profiles from localStorage', e);
            }

            this.parse(onDone);
        }


        parse(onDone?: () => void) {

            var must_save = false;

            if (this.profiles.length == 0) {

                // Migration
                if (Utils.keyExists(localStorage, 'people')) {
                    var p = createDefaultProfile();
                    p.points = JSON.parse(localStorage['people']);
                    this.profiles.push(p);
                    delete localStorage['people'];
                } else {
                    // default new profile
                    this.profiles.push(createDefaultProfile());
                }

                must_save = true;
            }

            this.activeProfile = Utils.clamp(this.activeProfile, 0, this.profiles.length - 1);

            // Load with async
            var loading = 0;

            this.profiles.forEach((p) => {
                // Add missing properties to the profile
                Utils.setIfMissing(p, 'points', []);
                Utils.setIfMissing(p, 'showTitle', true);
                Utils.setIfMissing(p, 'innerImage', '');
                Utils.setIfMissing(p, 'innerColor', '');
                Utils.setIfMissing(p, 'outerImage', '');
                Utils.setIfMissing(p, 'outerColor', '');
                Utils.setIfMissing(p, 'fgColor', '');
				Utils.setIfMissing(p, 'labelShadows', true);
				Utils.setIfMissing(p, 'labelHoverBg', '');

                loading++;
                TzResolver.resolvePointTimezones(p.points, () => {
                    loading--;
                });
            });

            var self = this;

            // wait till all is done
            (function probe() {
                if (loading == 0) {
                    // save if changed while loading (was empty etc)
                    if (must_save) {
                        self.store();
                    }

                    (typeof onDone == 'function') && onDone();
                } else {
                    setTimeout(probe, 5);
                }
            })();
        }


        store(onDone?: ()=>void) {
            // strip profiles one at a time
            var outp = [];
            this.profiles.forEach((pr) => {
                outp.push(stripProfile(pr));
            });

            // store
            localStorage['repository'] = JSON.stringify({
                profiles: outp,
                active: this.activeProfile
            });

            (typeof onDone == 'function') && onDone();
        }
    }


    /** Config store */
    export interface ConfigProvider {
        get(key: string, defval: any):any;
        set(key: string, value: any);
        setIfMissing(key: string, value: any);
    }


    /** Config provider from localStorage */
    export class LocalConfigProvider implements ConfigProvider {

        private local: Object = null;

        private _read() {
            if (!this.local) {
                try {
                    var t = localStorage['config'];
                    var j = JSON.parse(t);
                    this.local = j || {};
                } catch (e) {
                    this.local = {};
                }
            }
        }

        get(key: string, defval: any): any {
            this._read();

            return Utils.objGet(this.local, key, defval);
        }

        set(key: string, value: any) {
            this._read();
            this.local[key] = value;

            // Save
            localStorage['config'] = JSON.stringify(this.local);
        }

        setIfMissing(key: string, value: any) {
            if (!Utils.keyExists(this.local, key)) {
                this.set(key, value);
            }
        }
    }
}
