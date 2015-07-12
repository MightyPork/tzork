/// <reference path="typing/moment.d.ts" />
/// <reference path="typing/jquery.d.ts" />


if (!Date.now) {
	Date.now = function (): number {
		return new Date().getTime();
	}
}

module Utils {

	/** Clamp an int */
	export function clamp(what: number, low: number, high: number) {
		return Math.max(low, Math.min(high, what));
	}


	/**
	 * Convert hour to angle (deg)
	 *
	 * @param h hour 0..24
	 * @returns {number} angle in degrees
	 */
	export function hour2angle(h: number): number {
		var a = (18 - h) * 15;
		while (a < 0) a += 360;
		return a;
	}


	/**
	 * Position an element using polar coordinates
	 *
	 * @param element
	 * @param angle    degrees
	 * @param distance radius (in "unit")
	 * @param octant what octant it's in (determines from where we're positioning)
	 */
	export function positionAt(element: HTMLElement, angle: number, distance: number, octant: number = 0): void {
		var xx = (distance * Math.cos((angle / 180) * Math.PI));
		var yy = (distance * Math.sin((angle / 180) * Math.PI));

		switch (octant) {
			case 0:
			case 1:
			case 7:
				element.style.left = (50 + xx) + '%';
				element.style.top = (50 - yy) + '%';
				break;

			case 2:
			case 3:
			case 4:
				element.style.right = (50 - xx) + '%';
				element.style.top = (50 - yy) + '%';
				break;

			case 5:
				element.style.right = (50 - xx) + '%';
				element.style.bottom = (50 + yy) + '%';
				break;

			case 6:
				element.style.left = (50 + xx) + '%';
				element.style.bottom = (50 + yy) + '%';
				break;
		}
	}

	export function positionAtPx(element: HTMLElement, angle: number, distance: number, fullw: number, offs: number, octant: number = 0): void {
		var xx = (distance * Math.cos((angle / 180) * Math.PI));
		var yy = (distance * Math.sin((angle / 180) * Math.PI));

		switch (octant) {
			case 0:
			case 1:
			case 7:
				element.style.left = Math.round(fullw / 2 + xx + offs) + 'px';
				element.style.top = Math.round(fullw / 2 - yy + offs) + 'px';
				break;

			case 2:
			case 3:
			case 4:
				element.style.right = Math.round(fullw / 2 - xx + offs) + 'px';
				element.style.top = Math.round(fullw / 2 - yy + offs) + 'px';
				break;

			case 5:
				element.style.right = Math.round(fullw / 2 - xx + offs) + 'px';
				element.style.bottom = Math.round(fullw / 2 + yy + offs) + 'px';
				break;

			case 6:
				element.style.left = Math.round(fullw / 2 + xx + offs) + 'px';
				element.style.bottom = Math.round(fullw / 2 + yy + offs) + 'px';
				break;
		}
	}


	/**
	 * Determine if person is in prev / next day.
	 * Takes moment.js instances as arguments.
	 *
	 * Returns -1, 0, 1 if "there"-day is before, at, or after "here".
	 */
	export function mmtDayCompare(here: moment.Moment, there: moment.Moment) {

		// local
		var d0 = here.dayOfYear();
		var y0 = here.year();

		// remote
		var d1 = there.dayOfYear();
		var y1 = there.year();

		if (y1 < y0) {
			return -1;
		} else if (y1 > y0) {
			return 1;
		} else {
			if (d1 < d0) {
				return -1;
			} else if (d1 > d0) {
				return 1;
			}
		}

		return 0;
	}


	export function iterateQuery(query: string, func: (HTMLNode)=>void): void {
		var outers = document.querySelectorAll(query);
		for (var i = 0; i < outers.length; i++) {
			var e = <HTMLElement> outers[i];
			func(e);
		}
	}


	export function queryOne(query: string): HTMLElement {
		return <HTMLElement> document.querySelector(query);
	}


	export function setIfMissing(obj: Object, key: string, value: any) {
		if (!keyExists(obj, key)) {
			obj[key] = value;
		}
	}


	export function keyExists(x: Object, key: string) {
		return typeof(x[key]) != 'undefined';
	}


	export function objGet(obj: Object, key: string, def: any) {
		if (!keyExists(obj, key)) return def;
		return obj[key];
	}


	/** Make <tab> key work properly in textareas */
	export function fixTextareaTabKey() {
		var textareas = document.getElementsByTagName('textarea');
		var count = textareas.length;
		for (var i = 0; i < count; i++) {
			(<HTMLTextAreaElement> textareas[i]).onkeydown = function (e) {
				if (e.keyCode == 9 || e.which == 9) {
					e.preventDefault();
					var s = this.selectionStart;
					this.value = this.value.substring(0, this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
					this.selectionEnd = s + 1;
				}
			}
		}
	}


	export function hoverMenu(button, menu) {
		var menuopen = false;
		var closemenutimeout;

		$(button).on('mouseover', function () {
			$(menu).removeClass('gone');
			menuopen = true;
			clearTimeout(closemenutimeout);
		});

		$(menu).on('mouseover', function () {
			clearTimeout(closemenutimeout);
		});

		function outhandler() {
			closemenutimeout = setTimeout(() => {
				$(menu).addClass('gone');
				menuopen = false;
			}, 10);
		}

		$(menu).on('mouseout', outhandler);
		$(button).on('mouseout', outhandler);
	}


	export function rgb2hsb(r, g, b) {
		r /= 255;
		g /= 255;
		b /= 255; // Scale to unity.
		var minVal = Math.min(r, g, b),
			maxVal = Math.max(r, g, b),
			delta = maxVal - minVal,
			HSB = {h: 0, s: 0, b: maxVal},
			del_R, del_G, del_B;

		if (delta !== 0) {
			HSB.s = delta / maxVal;
			del_R = (((maxVal - r) / 6) + (delta / 2)) / delta;
			del_G = (((maxVal - g) / 6) + (delta / 2)) / delta;
			del_B = (((maxVal - b) / 6) + (delta / 2)) / delta;

			if (r === maxVal) {
				HSB.h = del_B - del_G;
			}
			else if (g === maxVal) {
				HSB.h = (1 / 3) + del_R - del_B;
			}
			else if (b === maxVal) {
				HSB.h = (2 / 3) + del_G - del_R;
			}

			if (HSB.h < 0) {
				HSB.h += 1;
			}
			if (HSB.h > 1) {
				HSB.h -= 1;
			}
		}

		HSB.h *= 360;
		HSB.s *= 100;
		HSB.b *= 100;

		return HSB;
	}


	export function isColorDark(r: number, g: number, b: number) : boolean {
		return (((r * 299) + (g * 587) + (b * 114)) / 1000) < 128;
	}


	export function applyStylesheet(id, css) {
		// Nuke old style element
		var oldstyle = document.getElementById(id);
		if (oldstyle) {
			oldstyle.parentElement.removeChild(oldstyle);
		}
		var sty: HTMLStyleElement = document.createElement('style');
		sty.type = 'text/css';
		sty.innerHTML = css;
		sty.id = id;

		document.head.appendChild(sty);
	}
}
