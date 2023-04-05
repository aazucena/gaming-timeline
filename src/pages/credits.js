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
		let credits = (
			`<div class="console-title">
					<span class="title">Credits</span>
			</div>
			<div class="console-credits">
				<div class="credits-category">
					<span class="category">Games & its Resources</span>
					<div class="credits">
						<span class="credit">Galaxian</span>
						<span class="credit">Pac-man</span>
						<span class="credit">Legend of Zelda: Ocarina of Time</span>
						<span class="credit">Minecraft</span>
						<span class="credit">Super Mario Galaxy 2</span>
						<span class="credit">Among Us</span>
					</div>
				</div>
				<div class="credits-category">
					<span class="category">Technologies used</span>
					<div class="credits">
						<span class="credit">HTML</span>
						<span class="credit">Sass</span>
						<span class="credit">Javascript with JQuery</span>
						<span class="credit">GSAP</span>
						<span class="credit">Parcel Bundler</span>
						<span class="credit">Howler</span>
					</div>
				</div>
			</div>`
		)
		let page = `
      <div id="credits">
          <div class="console">
              <div class="console-header">
								${credits}
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
