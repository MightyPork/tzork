JSFILES = js/source/_zone-names.js
JSFILES += js/source/_zone-aliases.js
JSFILES += js/source/_people.js
JSFILES += js/source/_ajax.js
JSFILES += js/source/_utils.js
JSFILES += js/source/_tz_utils.js
JSFILES += js/source/_setup.js
JSFILES += js/source/application.js

JSTARGET = js/application.js

js: $(JSFILES)
	@## Concatenate files
	@echo "//////////////////////////////////////////////////////////////////////////////" > $(JSTARGET)
	@echo "// THIS IS A GENERATED FILE, CHANGES WILL BE LOST!!!                        //" >> $(JSTARGET)
	@echo "//                                                                          //" >> $(JSTARGET)
	@echo "// Please edit files in js/source, and then run 'make js' in project root.  //" >> $(JSTARGET)
	@echo "//////////////////////////////////////////////////////////////////////////////" >> $(JSTARGET)
	@echo "" >> $(JSTARGET)
	@cat $(JSFILES) >> $(JSTARGET)
	@## Compress the temporary file to output
	@yuicompressor --line-break 200 js/application.js -o js/application.min.js
	@# --nomunge

css:
	scss --update css:css

sass_watch:
	scss --watch css:css
