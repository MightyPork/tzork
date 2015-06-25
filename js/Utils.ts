/// <reference path="typing/moment.d.ts" />


if (!Date.now) {
    Date.now = function (): number {
        return new Date().getTime();
    }
}

module Utils {

    /** Clamp an int */
    export function clamp(what: number, low: number, high: number) {
        return Math.min(low, Math.max(high, what));
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
        var xx = distance * Math.cos((angle / 180) * Math.PI);
        var yy = distance * Math.sin((angle / 180) * Math.PI);

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
}
