/// <reference path="RGBColor.ts" />


module Tzork {
	export function applyThemeFromProfile() {
		var css = '';

		var prof = theRepo.profiles[theRepo.activeProfile];

		var out_i, out_c;
		out_i = prof.outerImage ? 'url(\"' + prof.outerImage + '\")' : 'none';
		out_c = prof.outerColor || '#07151D';

		css += '.theme-outer {background-color: ' + out_c + '; background-image: ' + out_i + '}';

		var in_c, in_i;
		in_i = prof.innerImage ? 'url(\"' + prof.innerImage + '\")' : 'none';
		in_c = prof.innerColor || 'transparent';

		css += '.theme-inner {background-color: ' + in_c + '; background-image: ' + in_i + '}';

		// text color, border color
		var color = prof.fgColor || '#9cfff7';

		css += '.theme-fg {color: ' + color + '}';

		if (!prof.labelShadows) {
			css += '.person-label {text-shadow: none}';
		}

		if (prof.labelHoverBg) {
			css += '.people-list:hover {background-color:' + prof.labelHoverBg + '}';
		}

		// dark -shadows
		var rc = new RGBColor(color);
		var isFgDark = Utils.isColorDark(rc.r, rc.g, rc.b);
		var rc = new RGBColor(in_c);
		var isInBgDark = Utils.isColorDark(rc.r, rc.g, rc.b);
		var rc = new RGBColor(out_c);
		var isOutBgDark = Utils.isColorDark(rc.r, rc.g, rc.b);

		if (isFgDark) {
			if (in_i == 'none' && out_i == 'none' && (in_c != 'transparent' && !isInBgDark) && (!isOutBgDark)) {
				// no need for disk shadow
				css += '#disc {box-shadow: none}';
			} else {
				css += '#disc {box-shadow: 0 0 3px 1px white, inset 0 0 3px 1px white}';
			}

			css += '.bullet {box-shadow: 0 0 4px white}';

			if (in_i == 'none' && ((in_c != 'transparent' && !isInBgDark) || (in_c == 'transparent' && (out_i == 'none' && !isOutBgDark)))) {
				// no need for shadows
				css += '.mark {text-shadow: none}';
				css += '#time-box {text-shadow: none}';
			} else {
				css += '.mark {text-shadow: 0 0 3px white, 0 0 6px white}';
				css += '#time-box {text-shadow: 0 0 8px white, 0 0 4px white}';
			}
		}

		// PROFILES MENU

		if (prof.menuColor) {
			color = prof.menuColor;
		}

		rc = new RGBColor(color);
		css += '#menubar {color: ' + color + '}';
		css += '.profiles-menu a {background-color: ' + rc.toRGBA(.1) + '}';
		css += '.profiles-menu a:hover {background-color: ' + rc.toRGBA(.2) + '}';

		Utils.applyStylesheet('theme-styles', css);
	}
}
