import jquery from 'jquery';
// export for others scripts to use
window.$ = jquery;
window.jQuery = jquery;
import 'bootstrap';

import App from './App.html';

var app = new App({
	target: document.body,
	data: {
		"name": "Kiho"
	}
});

export default app;