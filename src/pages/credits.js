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
		let page = `
      <div id="credits">
          <div class="console">
              <div class="console-header">
                  <div class="console-title">
                      <span class="title">Credits</span>
                  </div>
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
			console.log('🚀 ~ file: credits.js:48 ~ onKeyDown ~ key:', key);
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
