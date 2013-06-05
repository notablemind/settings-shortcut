
build: components index.js settings-shortcut.styl template.js
	@component build --dev

template.js: template.html
	@component convert $<

template.html: template.jade
	@jade $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
