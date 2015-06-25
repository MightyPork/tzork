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

        public constructor() {
            // init
            this.disc = document.getElementById('disc');
            this.buildClockMarks();

            this.updateTime();
            this.interval_time = setInterval(this.updateTime, 1000);
        }


        public loadActiveProfile() {
            this.clear();
            this.populate(theRepo.profiles[theRepo.activeProfile])
        }


        /** Populate with a profile */
        private populate(profile: Profile) {
            console.log('Populate with profile: ', profile);

            this.profile = profile;

            this.applyColorsFromProfile();

            this.updatePoints();

            // refresh the disc every N seconds
            this.interval_people = setInterval(() => {
                this.updatePoints()
            }, 1000 * 10);

            // force refresh after tab gets focused
            window.onfocus = () => {
                this.updatePoints();
                this.updateTime();
            };

            var e = document.getElementById('setup_btn');
            e.addEventListener('click', () => {
                // this.openSetupDialog(); TODO
            });
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


        private applyColorsFromProfile() {
            var outer = document.getElementById('tzork-bg');
            var inner = this.disc;

            var p = this.profile;

            // Apply bg image
            if (p.outerImage != null) {
                outer.style.backgroundImage = 'url(\"' + p.outerImage + '\")';
            } else {
                outer.style.backgroundImage = 'none';
            }

            // Apply inner image
            if (p.innerImage != null) {
                inner.style.backgroundImage = 'url(\"' + p.innerImage + '\")';
            } else {
                inner.style.backgroundImage = 'none';
            }

            // Apply bg color
            if (p.outerColor != null) {
                outer.style.backgroundColor = p.outerColor;
            } else {
                outer.style.backgroundColor = '#07151D';
            }

            // Apply bg color
            if (p.innerColor != null) {
                inner.style.backgroundColor = p.innerColor;
            } else {
                inner.style.backgroundColor = 'transparent';
            }

            var color = p.fgColor || '#9cfff7';

            // Set color of ring (and marks and time)
            this.disc.style.borderColor = color;
            this.disc.style.color = color;
        }


        /** Build the hour numbers */
        private buildClockMarks() {
            // The clock marks
            for (var i = 0; i < 24; i++) {
                // mark div
                var mark = document.createElement('div');
                mark.classList.add('mark');
                mark.classList.add('hour-' + i);

                if (i == 0 || i == 6 || i == 12 || i == 18) {
                    mark.classList.add('sixth');
                }

                mark.textContent = '' + i;

                var angle = Utils.hour2angle(i);
                Utils.positionAt(mark, angle, 45);
                this.disc.appendChild(mark);
            }
        }


        /** Update the local time display */
        private updateTime() {
            // redraw time, wrap colon in span
            var mmt = moment();

            var t = mmt.format('H:mm');
            if (t !== this.last_time) {
                this.last_time = t;
                // need zero-padded minutes!
                var parts = t.split(':');
                document.getElementById('localtime').innerHTML = parts[0] + '<span id="loctimecolon">:</span>' + parts[1];
            }

            var s = (new Date()).getSeconds() % 2;
            document.getElementById('loctimecolon').style.visibility = s ? 'visible' : 'hidden';
        }


        /** Redraw people (actually deletes and re-adds them) */
        private updatePoints() {
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
            this.buildPoints();
        }


        /** Build all people labels */
        private buildPoints() {
            var resolved = [];

            // Group people with similar time
            this.profile.points.forEach(function (obj) {
                if (!obj._valid) return;

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
                this.addPointsAtTime(x.t, x.p);
            });
        }


        /** Add a bunch of people at specified time (s) */
        private addPointsAtTime(secs: number, people: Point[]) {
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
                var child = this.createPointLabel(peep);
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
        private createPointLabel(obj: Point): HTMLElement {
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
