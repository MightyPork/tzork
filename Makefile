compressjs:
	yuicompressor --line-break 200 js/application.js -o js/application.min.js

css:
	scss --update css:css

sass_watch:
	scss --watch css:css
