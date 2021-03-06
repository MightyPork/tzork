/// <reference path="Utils.ts" />
/// <reference path="TzorkInit.ts" />
/// <reference path="Theme.ts" />

module Tzork {
	export class Clock {
		private discSize: number;
		private disc: HTMLElement;

		private interval_people: number;
		private interval_time: number;

		/** Last displayed time - checked to prevent needless redrawing */
		private last_time: string;
		/** Flag that mouse is hovering a list */
		private mouse_on_list: boolean;

		constructor() {
			// init
			this.disc = document.getElementById('disc');
			this._updateTime();
			this.interval_time = setInterval(this._updateTime, 1000);

			var resizeClock = () => {
				var w = window.innerWidth;
				var h = window.innerHeight;

				// subtract expected size of labels
				var s_full = Math.round(Math.min(w, h)) * 1.2;
				var fs_full = Math.round(s_full * 0.0185);

				w -= fs_full * 19;
				h -= fs_full * 8;

				var s = Math.round(Math.min(w, h));
				if (s % 2) s++;// round to even (chrome render blur glitch)

				this.setDiskSize(s);

				var fs = Math.round(s * 0.025);
				if (fs < 8) fs = 8;

				var tresh = 400;
				if (s > tresh) fs = Math.round(tresh * 0.025 + (s - tresh) * 0.015);

				var css = '#disc {font-size:' + fs + 'px}';

				if (s < 250) {
					css += '.mark {font-size:1.4em}.mark.sixth{font-size:1.8em}';
					css += '#time-box {font-size: .6em;}'
				}

				Utils.applyStylesheet('size-style', css);
			};

			window.onresize = resizeClock;
			resizeClock();

			this.loadActiveProfile();
		}


		setDiskSize(size: number) {
			this.disc.style.width = size + "px";
			this.disc.style.height = size + "px";

			this.discSize = size;

			this.updatePoints(); // change sizes
			this._buildClockMarks();
		}


		loadActiveProfile() {
			this.clear();
			this._populate()
		}


		/** Populate with a profile */
		private _populate() {
			var profile = Tzork.theRepo.getActiveProfile();

			console.log('Populate with profile: ', profile);

			Tzork.applyThemeFromProfile();

			var lbl = Utils.queryOne('#profile-label');
			lbl.textContent = profile.title;
			lbl.style.display = profile.showTitle ? 'block' : 'none';


			this.updatePoints();

			// refresh the disc every N seconds
			this.interval_people = setInterval(() => {
				this.updatePoints()
			}, 1000 * 10);

			// force refresh after tab gets focused
			window.onfocus = () => {
				this.updatePoints();
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


		/** Build the hour numbers */
		private _buildClockMarks() {

			// clear
			var old = document.querySelectorAll('.mark');
			for (var i = 0; i < old.length; i++) {
				old[i].parentNode.removeChild(old[i]);
			}

			// 12h time
			var twelve = <boolean> Tzork.theConfig.get('twelve', false);

			// disc border width (needed for precise positioning)
			var bdrW = parseInt(window.getComputedStyle(this.disc).borderRightWidth.replace('px', ''));

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
					if (j > 12) j -= 12;
					if (i == 0) j = 12;
					mark.textContent = '' + j;
				} else {
					mark.textContent = '' + i;
				}

				var angle = Utils.hour2angle(i);

				Utils.positionAtPx(mark, angle, (this.discSize / 2) * 0.88, this.discSize, -bdrW);

				this.disc.appendChild(mark);
			}
		}


		/** Update the local time display */
		private _updateTime() {
			// redraw time, wrap colon in span
			var mmt = moment();

			// 12-hour time
			var twelve = <boolean> Tzork.theConfig.get('twelve', false);

			var t = mmt.format(twelve?'h:mm A':'H:mm');
			if (t !== this.last_time) {
				this.last_time = t;
				// need zero-padded minutes!
				var parts = t.split(':');

				var ampm;
				if (twelve) {
					ampm = parts[1].substr(parts[1].length-2);
					parts[1] = parts[1].substr(0, parts[1].length-3);
				}

				var html = parts[0] + '<span id="local-time-colon">:</span>' + parts[1];
				if(twelve) html += '<span class="ampm">'+ampm+'</span>';
				var el = document.getElementById('local-time');
				el.innerHTML = html;
				if(twelve) {
					el.classList.add('twelve');
				} else {
					el.classList.remove('twelve');
				}
			}

			var s = (new Date()).getSeconds() % 2;
			document.getElementById('local-time-colon').style.visibility = s ? 'visible' : 'hidden';
		}


		/** Redraw people (actually deletes and re-adds them) */
		public updatePoints() {
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

			var p = Tzork.theRepo.getActiveProfile();

			// Group people with similar time
			p.points.forEach(function (obj) {
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
		private _addPointsAtTime(secs: number, people: Data.Point[]) {
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

			// disc border width (needed for precise positioning)
			var bdrW = parseInt(window.getComputedStyle(this.disc).borderRightWidth.replace('px', ''));


			// --- Create & place a bullet ---
			var bu = <HTMLElement> document.createElement('div');
			bu.className = 'bullet';
			bu.style.backgroundColor = first.color;
			Utils.positionAtPx(bu, angle, this.discSize / 2 - 1, this.discSize, -bdrW, 0);
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

			var clr: string;

			// add the people
			for (i = 0; i < people.length; i++) {
				var peep = people[i];
				var child = this._createPointLabel(peep);
				child.title = there.format('H:mm, MMM Do') + ' — ' + peep._tz;
				list.appendChild(child);

				if (i == 0) clr = child.style.color;
			}

			if (people.length > 5 && octant >= 5) {
				// fake octant for positioning from bottom
				list.classList.add('forceGrowUp');
				octant = 6;
			}

			list.style.borderColor = clr;


			// Mouse listeners, to suppress redraw when mouse is on list
			list.addEventListener('mouseover', () => {
				this.mouse_on_list = true;
			});

			list.addEventListener('mouseout', () => {
				this.mouse_on_list = false;
			});


			// --- Place the list ---

			var xtra = (this.discSize / 150) * 5;

			Utils.positionAtPx(list, angle, this.discSize / 2 + xtra, this.discSize, -bdrW, octant);

			this.disc.appendChild(list);
		}


		/** Create person (point) label */
		private _createPointLabel(obj: Data.Point): HTMLElement {
			var la;

			if (obj.name.indexOf('@') === 0) {
				// Twitter name
				la = <HTMLAnchorElement> document.createElement('a');
				la.href = 'http://twitter.com/' + obj.name;
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
