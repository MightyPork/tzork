JSFILES = js/source/_zone-names.js
JSFILES += js/source/_zone-aliases.js
JSFILES += js/source/_people.js
JSFILES += js/source/_utils.js
JSFILES += js/source/_tz_utils.js
JSFILES += js/source/application.js

js: $(JSFILES)
	@## Concatenate files
	cat $(JSFILES) > js/application.js

	@## Compress the temporary file to output
	yuicompressor js/application.js -o js/application.min.js
	@# --nomunge

css:
	scss --update css:css

sass_watch:
	scss --watch css:css
