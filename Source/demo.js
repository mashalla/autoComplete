/*
---
script: Accessible Autocomplete
license: GNU/GPL license.
description: Accessible version of a Google style autocompleter for MooTools that use AJAX request.
copyright: Copyright (c) Juan Lago D.
authors: [Juan Lago <juanparati[at]gmail[dot]com>, Alex Duschek]

requires:

- core:1.4.0: Element.Event
- core:1.4.0: Element.Event.Delegation
- core:1.4.0:  Request.JSON

provides: [GooCompleter]

...
*/
window.addEvent('domready', function(){

	var myAutocompleter = new GooCompleter('searchfield', {
		param: 'search',			// Param string to send			
		listbox_offset: { y: 2 },	// Listbox offset for Y			
		delay: 500					// Request delay to 0.5 seconds
	});
    
});
