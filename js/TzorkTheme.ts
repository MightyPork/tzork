/// <reference path="RGBColor.ts" />


module Tzork {
	export function applyThemeFromProfile() {
		// Nuke old style element
		var oldstyle = document.getElementById('theme-styles');
		if (oldstyle) {
			oldstyle.parentElement.removeChild(oldstyle);
		}

		var css = '';

		var p = theRepo.profiles[theRepo.activeProfile];

		var out_i, out_c;
		out_i = p.outerImage ? 'url(\"' + p.outerImage + '\")' : 'none';
		out_c = p.outerColor || '#07151D';

		css += '.theme-outer {background-color: ' + out_c + '; background-image: ' + out_i + '}';

		var in_c, in_i;
		in_i = p.innerImage ? 'url(\"' + p.innerImage + '\")' : 'none';
		in_c = p.innerColor || 'transparent';

		css += '.theme-inner {background-color: ' + in_c + '; background-image: ' + in_i + '}';

		// text color, border color
		var color = p.fgColor || '#9cfff7';

		css += '.theme-fg {color: ' + color + '}';

		// BACKGROUND OF THE PROFILES MENU

		var rc = new RGBColor(color);

		css += '.profiles-menu a {background-color: ' + rc.toRGBA(.1) + ';}';
		css += '.profiles-menu a:hover {background-color: ' + rc.toRGBA(.2) + ';}';

		var isFgDark = Utils.isColorDark(rc.r, rc.g, rc.b);

		if (isFgDark) {
			css += '#disc {box-shadow: 0 0 3px 1px white, inset 0 0 3px 1px white}';
			css += '.mark {text-shadow: 0 0 3px white, 0 0 6px white}';
			css += '.bullet {box-shadow: 0 0 4px white;}';
			css += '#profile-label {text-shadow: 0 0 8px white, 0 0 4px white;}';
			css += '#local-time {text-shadow: 0 0 8px white, 0 0 4px white;}';
		}

		var sty: HTMLStyleElement = document.createElement('style');
		sty.type = 'text/css';
		sty.innerHTML = css;
		sty.id = 'theme-styles';

		document.head.appendChild(sty);
	}
}
