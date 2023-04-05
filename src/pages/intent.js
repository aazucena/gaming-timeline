import $ from 'jquery';

const credits = (props) => {
	const beforeRender = async () => {
		let hasChildren = $('#app').children().length > 0;
		if (hasChildren) {
			if (props?.transition && !isNaN(props?.transition)) {
				$('#app').fadeOut(props?.transition ?? 1000);
			} else {
				$('#app').hide();
			}
			$('#app').html();
		}
	};

	const render = async () => {
		let text = (
			`This website is dedicated to displaying various historical periods via the highly acclaimed video game of the moment. 
			The layout, pictures, colors, and text from each era are meant to induce "nostalgia" in conjunction with the music.
			As a result, I can add a variety of animations and user interactions to this composition, enhancing the user experience gives the perception of growth in the video games for each age by starting from the terminal console and ending in 2020.
			<br><br><span>I suggest you should turn on the audio from your device to enhance the web experience.</span>
			<br>Enjoy!
			<br><br>
			- Aldrin Azucena`
		)
		let intent = (
			`<div class="console-title">
					<span class="title">Intent</span>
			</div>
			<div class="console-intent">
				<div class="intent">${text}
				</div>
			</div>`
		)
		let page = `
      <div id="intent">
          <div class="console">
              <div class="console-header">
								${intent}
              </div>
              <div class="console-terminal">
                  <div class="terminal-pop">
                    Press [Enter] to exit
                  </div>
              </div>
          </div>
      </div>`;

		if (props?.transition) {
			$('#app')
				.show()
				.html(page)
				.fadeIn(props?.transition ?? 1000);
		} else {
			$('#app').show().html(page);
		}
	};

	const afterRender = async () => {
		let terminal_id = `terminal`;

		let onKeyDown = async (event) => {
			let key = event.originalEvent.key;
			switch (key) {
				case 'Enter':
					let start = (await import('./start.js')).default;
          $(document).off('keydown')
          $(document.body).off('keydown')
					setTimeout(() => {
						start();
					}, 400);
					break;
				default:
					break;
			}
			// $(event.target).width(`${width}ch`)
		};

		$(document).on('keydown', onKeyDown);
		$(document.body).on('keydown', onKeyDown);
	};
	beforeRender();
	render();
	setTimeout(() => {
		afterRender();
	}, 500);
};

export default credits;
