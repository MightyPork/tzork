/// <reference path="Utils.ts" />
/// <reference path="TzorkInit.ts" />


module Tzork {
    export class Clock {
        private disc: HTMLElement;
        private profile: Profile;

        private interval_people: number;
        private interval_time: number;

        /** Last displayed time - checked to prevent needless redrawing */
        private last_time: string;
        /** Flag that mouse is hovering a list */
        private mouse_on_list: boolean;

        constructor() {
            // init
            this.disc = document.getElementById('disc');
            this._buildClockMarks();

            this._updateTime();
            this.interval_time = setInterval(this._updateTime, 1000);
        }


        setDiskSize(size: number) {
            this.disc.style.width = size+"px";
            this.disc.style.height = size+"px";
        }


        loadActiveProfile() {
            this.clear();
            this._populate(theRepo.profiles[theRepo.activeProfile])
        }


        /** Populate with a profile */
        private _populate(profile: Profile) {
            console.log('Populate with profile: ', profile);

            this.profile = profile;

            this._applyColorsFromProfile();

            var lbl = Utils.queryOne('#profile-label');
            lbl.textContent = profile.title;
            lbl.style.display = profile.showTitle ? 'block' : 'none';


            this._updatePoints();

            // refresh the disc every N seconds
            this.interval_people = setInterval(() => {
                this._updatePoints()
            }, 1000 * 10);

            // force refresh after tab gets focused
            window.onfocus = () => {
                this._updatePoints();
                this._updateTime();
            };
        }


        /** Remove people, prepare for profile change */
        public clear() {
            // Clean up
            var old = document.querySelectorAll('.bullet, .person-label, .people-list');
            for (var i = 0; i < old.length; i++) {
                old[i].parentNode.removeChild(old[i]);
            }

            clearInterval(this.interval_people);
        }


        private _applyColorsFromProfile() {
            var p = this.profile;

            var out_i, out_c;

            if (p.outerImage != null) {
                out_i = 'url(\"' + p.outerImage + '\")';
            } else {
                out_i = 'none';
            }

            if (p.outerColor != null) {
                out_c = p.outerColor;
            } else {
                out_c = '#07151D';
            }

            Utils.iterateQuery('.theme-outer', (e) => {
                e.style.backgroundColor = out_c;
                e.style.backgroundImage = out_i;
            });

            var in_c, in_i;

            // Apply inner image
            if (p.innerImage != null) {
                in_i = 'url(\"' + p.innerImage + '\")';
            } else {
                in_i = 'none';
            }

            // Apply bg color
            if (p.innerColor != null) {
                in_c = p.innerColor;
            } else {
                in_c = 'transparent';
            }

            Utils.iterateQuery('.theme-inner', (e) => {
                e.style.backgroundColor = in_c;
                e.style.backgroundImage = in_i;
            });

            // text color, border color
            var color = p.fgColor || '#9cfff7';

            Utils.iterateQuery('.theme-fg', (e) => {
                e.style.color = color;
                e.style.borderColor = color;
            });
        }


        /** Build the hour numbers */
        private _buildClockMarks() {

            // 12h time
            var twelve = <boolean> theConfig.get('twelve', false);

            // The clock marks
            for (var i = 0; i < 24; i++) {
                // mark div
                var mark = document.createElement('div');
                mark.classList.add('mark');
                mark.classList.add('hour-' + i);

                if (i == 0 || i == 6 || i == 12 || i == 18) {
                    mark.classList.add('sixth');
                }

                // 12h mode
                if (twelve) {
                    var j = i;
                    if (j > 12) j-= 12;
                    mark.textContent = '' + j;
                } else {
                    mark.textContent = '' + i;
                }

                var angle = Utils.hour2angle(i);
                Utils.positionAt(mark, angle, 45);
                this.disc.appendChild(mark);
            }
        }


        /** Update the local time display */
        private _updateTime() {
            // redraw time, wrap colon in span
            var mmt = moment();

            var t = mmt.format('H:mm');
            if (t !== this.last_time) {
                this.last_time = t;
                // need zero-padded minutes!
                var parts = t.split(':');
                document.getElementById('local-time').innerHTML = parts[0] + '<span id="local-time-colon">:</span>' + parts[1];
            }

            var s = (new Date()).getSeconds() % 2;
            document.getElementById('local-time-colon').style.visibility = s ? 'visible' : 'hidden';
        }


        /** Redraw people (actually deletes and re-adds them) */
        private _updatePoints() {
            if (this.mouse_on_list) {
                console.log('Mouse over list, not redrawing.');
                return;
            }

            // Delete all old stuff
            var x = document.querySelectorAll('.bullet, .person, .people-list');
            for (var i in x) {
                if (x.hasOwnProperty(i)) {
                    var e = x[i];
                    if (!e || !e.parentNode) continue;

                    e.parentNode.removeChild(e);
                }
            }

            // Rebuild
            this._buildPoints();
        }


        /** Build all people labels */
        private _buildPoints() {
            var resolved = [];

            // Group people with similar time
            this.profile.points.forEach(function (obj) {
                if (!obj._valid || !obj.show) return;

                var t = TzResolver.getTimeForPoint(obj);

                obj._t = t; // store time in the object for further use

                var placed;
                resolved.some(function (v) {
                    // If the time is very close
                    // merge
                    if (Math.abs(v.t - t) < 60) {
                        v.p.push(obj);
                        placed = true;
                        return true;
                    }
                });

                if (!placed) {
                    resolved.push({t: t, p: [obj]});
                }
            });

            resolved.forEach((x) => {
                //console.log('Time ' + x.t + ', people #: ' + x.p.length);
                this._addPointsAtTime(x.t, x.p);
            });
        }


        /** Add a bunch of people at specified time (s) */
        private _addPointsAtTime(secs: number, people: Point[]) {
            var i;

            var first = people[0];

            // Convert to hours & to degrees
            var t = secs / 3600;
            var angle = Utils.hour2angle(t);


            // Work out position
            var octant = Math.floor(angle / 45);
            var quadrant = Math.floor(octant / 2);
            var is_up = (quadrant < 2);
            var is_left = (quadrant > 0 && quadrant < 3);


            // --- Create & place a bullet ---
            var bu = <HTMLElement> document.createElement('div');
            bu.className = 'bullet';
            bu.style.backgroundColor = first.color;
            Utils.positionAt(bu, angle, 50.2);
            this.disc.appendChild(bu);


            // --- Create a list element ---

            var list = <HTMLElement> document.createElement('div');
            list.classList.add('people-list');


            // add location classes (where the list is)
            list.classList.add(is_left ? 'left' : 'right');
            list.classList.add(is_up ? 'up' : 'down');
            list.classList.add('quad' + quadrant);
            list.classList.add('oct' + octant);


            // Determine if this is in prev / next day
            var here = moment();
            var there = moment().tz(first._tz);
            i = Utils.mmtDayCompare(here, there);
            var clz = (i == -1) ? 'day-prev' : (i == 1) ? 'day-next' : null;
            if (clz !== null) {
                list.classList.add(clz);
                bu.classList.add(clz);
            }


            // Add classes for multi-person list
            if (people.length > 1) {
                list.classList.add('multiple');
                list.classList.add('count-' + people.length);
            }


            // add the people
            for (i = 0; i < people.length; i++) {
                var peep = people[i];
                var child = this._createPointLabel(peep);
                child.title = there.format('H:mm, MMM Do') + ' — ' + peep._tz;
                list.appendChild(child);
            }


            // Mouse listeners, to suppress redraw when mouse is on list
            list.addEventListener('mouseover', () => {
                this.mouse_on_list = true;
            });

            list.addEventListener('mouseout', () => {
                this.mouse_on_list = false;
            });


            // --- Place the list ---
            Utils.positionAt(list, angle, 53.5, octant);
            this.disc.appendChild(list);
        }


        /** Create person (point) label */
        private _createPointLabel(obj: Point): HTMLElement {
            var la;

            if (obj.name.indexOf('@') === 0) {
                // Twitter name
                la = <HTMLAnchorElement> document.createElement('a');
                la.href = 'https://twitter.com/' + obj.name;
                la.target = '_blank';
            } else {
                // Generic name
                la = document.createElement('span');
            }

            la.classList.add('person-label');
            la.style.color = obj.color;
            la.textContent = obj.name;

            return la;
        }
    }
}
