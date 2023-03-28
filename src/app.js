import 'normalize.css';
import $ from 'jquery';

import { render } from './utils/render.js';


let terminal_id = `terminal`
let terminal_cli = $(`.${terminal_id} > .terminal-container > .terminal-cli`);

$(document).on('keypress', (event) => {
	let value = event.target.value;
	value = value === '' && event.originalEvent.key !==  'Enter' ? event.originalEvent.key : value;
	let width = value.length + 1;
	if (width >= 0) {
		terminal_cli.width(`${width}ch`);
	}
});
$(document).on('keydown', (event) => {
	let key = event.originalEvent.key;
	let value = event.target.value
	switch (key) {
		case 'Backspace':
		case 'Delete':
			let width = value.length;
			if (width >= 0) {
				width--;
				terminal_cli.width(`${width}ch`);
				terminal_cli.val(value)
			}
			break;
		case 'Enter':
			checkCommand(value)
			terminal_cli.val("")
			terminal_cli.width(`0ch`);
			break;
		default:
			if (key.length === 1) {
				terminal_cli.val(value)
				console.log("🚀 ~ file: app.js:19 ~ $ ~ value:", value)
			}
			break;
	}
	// $(event.target).width(`${width}ch`)
});


let checkCommand = (name) => {
	switch(true) {
		case "start.exe" === name:
		case "start" === name:
			console.log('Running Video Game History 0.0.1')
			break
		case "credits.exe" === name:
		case "credits" === name:
			console.log('Running Credits for Video Game History 0.0.1')
			break
		default:
			break
	}
}
