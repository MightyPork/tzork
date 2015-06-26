/// <reference path="TzResolver.ts" />
/// <reference path="Utils.ts" />


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


    /** Create default profile (if there's none in the repository) */
    export function createEmptyProfile(): Profile {
        return <Profile>{
            title: 'Untitled Profile',
            showTitle: true,
            innerImage: 'images/bg-earth.jpg',
            innerColor: '',
            outerImage: '',
            outerColor: '',
            fgColor: '',
            points: [
                {
                    name: '@MightyPork',
                    color: '#FF9A00',
                    tz: 'Prague',
                    show: true
                }
            ]
        };
    }


    /** A profile & config provider */
    export interface Repository {
        profiles: Profile[];

        activeProfile: number;

        /** Load & parse profiles and prepare repository for use */
        load(onDone?: ()=>void): void;

        /** Parse profiles array. Automatically called by load()! */
        parse(onDone?: ()=>void): void;

        /** Persist current state */
        store(onDone?: ()=>void): void;
    }


    /** Repository loaded/saved from/to localStorage */
    export class LocalRepository implements Repository {
        public profiles: Profile[] = [];

        public activeProfile: number = 0;

        public load(onDone?: ()=>void) {
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


        public parse(onDone?: ()=>void) {
            if (this.profiles.length == 0) {
                this.profiles.push(createEmptyProfile());
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

                loading++;
                TzResolver.resolvePointTimezones(p.points, () => {
                    loading--;
                });
            });

            // wait till all is done
            (function probe() {
                if (loading == 0) {
                    (typeof onDone == 'function') && onDone();
                } else {
                    setTimeout(probe, 5);
                }
            })();
        }


        public store(onDone?: ()=>void) {
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
}
