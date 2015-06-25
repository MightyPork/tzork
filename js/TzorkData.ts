/// <reference path="TzResolver.ts" />

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

        innerColor:string;
        innerImage:string;

        outerColor:string;
        outerImage:string;

        fgColor:string;

        points:Point[];

        _valid?:boolean;
    }


    /** Strip a transient stuff from profile */
    function stripProfile(p: Profile): Profile {
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


    /** A profile & config provider */
    export interface Repository {
        profiles: Profile[];

        /** Load & parse profiles and prepare repository for use */
        load(onDone?: ()=>void): void;

        /** Persist current state */
        store(onDone?: ()=>void): void;
    }


    /** Repository loaded/saved from/to localStorage */
    export class LocalRepository implements Repository {
        profiles: Profile[] = [];

        load(onDone?: ()=>void) {
            try {
                this.profiles = <Profile[]> JSON.parse(localStorage['profiles']) || [];
            } catch (e) {
                console.error('Error reading profiles from localStorage', e);
            }

            var loading = 0;

            this.profiles.forEach((p) => {
                loading++;
                TzResolver.resolvePointTimezones(p.points, ()=> {
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

        store(onDone?: ()=>void) {
            // strip profiles one at a time
            var outp = [];
            this.profiles.forEach((pr) => {
                outp.push(stripProfile(pr));
            });

            // store as JSON
            localStorage['profiles'] = JSON.stringify(outp);

            (typeof onDone == 'function') && onDone();
        }
    }
}
