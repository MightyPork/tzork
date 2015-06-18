JSFILES = js/app/_zone-names.js js/app/_zone-aliases.js js/app/_people.js js/app/application.js

js: $(JSFILES)
	@## Concatenate files
	cat $(JSFILES) > .tmp.js

	@## Compress the temporary file to output
	yuicompressor .tmp.js -o js/application.js
	@# --nomunge

	@## Remove temporary concatenated file
	rm .tmp.js

css:
	scss --update css:css

sass_watch:
	scss --watch css:css
