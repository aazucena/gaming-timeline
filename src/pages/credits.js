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
					<span class="category">Games & Their Resources</span>
					<div class="credits">
						<a href="https://en.wikipedia.org/wiki/Galaxian" target="_blank" class="credit">Galaxian</a>
						<a href="https://en.wikipedia.org/wiki/Pac-Man" target="_blank" class="credit">Pac-man</a>
						<a href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time" target="_blank" class="credit">Legend of Zelda: Ocarina of Time</a>
						<a href="https://en.wikipedia.org/wiki/Minecraft" target="_blank" class="credit">Minecraft</a>
						<a href="https://en.wikipedia.org/wiki/Super_Mario_Galaxy_2" target="_blank" class="credit">Super Mario Galaxy 2</a>
						<a href="https://en.wikipedia.org/wiki/Among_Us" target="_blank" class="credit">Among Us</a>
					</div>
				</div>
				<div class="credits-category">
					<span class="category">Technologies Used</span>
					<div class="credits">
						<a href="https://parceljs.org/" target="_blank" class="credit">Parcel Bundler 2</a>
						<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" class="credit">HTML</a>
						<a href="https://sass-lang.com/" target="_blank" class="credit">Sass</a>
						<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="credit">Javascript</a>
						<a href="https://jquery.com/" target="_blank" class="credit">JQuery</a>
						<a href="https://greensock.com/gsap/" target="_blank" class="credit">GSAP 3</a>
						<a href="https://howlerjs.com/" target="_blank" class="credit">Howler 2</a>
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
