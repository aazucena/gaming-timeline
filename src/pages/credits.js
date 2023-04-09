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
						<div class="credit-item">
							<a href="https://en.wikipedia.org/wiki/Galaxian" target="_blank" class="credit-title">Galaxian</a>
							<div class="subcredits">
								<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=250332476&searchtext=" class="subcredit">Galaga/Galaxian - Ship Image</a>
								<a href="https://downloads.khinsider.com/game-soundtracks/album/galaga/24%2520Name%2520Entry%2520%25282nd-5th%2529.mp3" class="subcredit">Galaga/Galaxian - Name Entry Theme</a>
								<a href="http://soundfxcenter.com/download-sound/galaga-firing-sound-effect/" class="subcredit">Galaga/Galaxian - Laser SFX</a>
							</div>
						</div>
						<div class="credit-item">
							<a href="https://en.wikipedia.org/wiki/Pac-Man" target="_blank" class="credit-title">Pac-man</a>
							<div class="subcredits">
								<a href="https://www.pinterest.ca/pin/253468285252737574/" class="subcredit">Pac-man - Maze Background Image</a>
								<a href="https://codepen.io/nshew/pen/WNvGKLY" class="subcredit">Pac-man - SVG Animation</a>
								<a href="https://downloads.khinsider.com/game-soundtracks/album/pac-man-arcade/pac-man-intro.mp3" class="subcredit">Pac-man - Main Theme</a>
							</div>
						</div>
						<div class="credit-item">
							<a href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time" target="_blank" class="credit-title">Legend of Zelda: Ocarina of Time</a>
							<div class="subcredits">
								<a href="https://downloads.khinsider.com/game-soundtracks/album/the-legend-of-zelda-ocarina-of-time/01%2520Prelude%2520of%2520Time.mp3" class="subcredit">The Legend of Zelda: Ocarina of Time - Prelude of Time Theme</a>
								<a href="https://www.youtube.com/watch?v=iNhsssDspEs" class="subcredit">The Legend of Zelda: Ocarina of Time - Title Screen Video</a>
								<a href="https://noproblo.dayjo.org/ZeldaSounds/OOT/index.html" class="subcredit">The Legend of Zelda: Ocarina of Time - Ocarina Notes</a>
							</div>
						</div>
						<div class="credit-item">
							<a href="https://en.wikipedia.org/wiki/Minecraft" target="_blank" class="credit-title">Minecraft</a>
							<div class="subcredits">
								<a href="https://wallpaperaccess.com/minecraft-grass" class="subcredit">Minecraft - Grass Background Image</a>
								<a href="https://downloads.khinsider.com/game-soundtracks/album/minecraft-in-game-survival-music-c418-songs-gamerip-2011/01.%2520Menu1.mp3" class="subcredit">Minecraft - Menu 1 Theme</a>
								<a href="https://www.youtube.com/watch?v=4E2ag-9hD-c" class="subcredit">Minecraft - Pickaxe SFX</a>
							</div>
						</div>
						<div class="credit-item">
							<a href="https://en.wikipedia.org/wiki/Super_Mario_Galaxy_2" target="_blank" class="credit-title">Super Mario Galaxy 2</a>
							<div class="subcredits">
								<a href="https://www.pinterest.ca/pin/retro-coin-icon-super-mario-icons--338332990733860823/" class="subcredit">Mario Coin</a>
								<a href="https://downloads.khinsider.com/game-soundtracks/album/super-mario-galaxy-2/2-29%2520Super%2520Mario%2520Galaxy%25202.mp3" class="subcredit">Super Mario Galaxy 2 - Main Theme</a>
							</div>
						</div>
						<div class="credit-item">
							<a href="https://en.wikipedia.org/wiki/Among_Us" target="_blank" class="credit-title">Among Us</a>
							<div class="subcredits">
								<a href="https://downloads.khinsider.com/game-soundtracks/album/among-us/Among%2520Us%2520Theme.mp3" class="subcredit">Among Us - Main Theme</a>
								<a href="https://www.spriters-resource.com/pc_computer/amongus/sheet/139386/" class="subcredit">Among Us - Sprites</a>
							</div>
						</div>
					</div>
				</div>
				<div class="credits-category">
					<span class="category">Fonts</span>
					<div class="credits">
						<a href="https://fonts.google.com/specimen/Inconsolata" target="_blank" class="credit">Inconsolata</a>
						<a href="https://fonts.google.com/specimen/Odibee+Sans" target="_blank" class="credit">Odibee Sans</a>
						<a href="https://www.cdnfonts.com/lg-a100.font" target="_blank" class="credit">LG A100</a>
						<a href="https://www.1001fonts.com/crackman-font.html" target="_blank" class="credit">CrackMan</a>
						<a href="https://www.dafont.com/triforce.font" target="_blank" class="credit">Triforce</a>
						<a href="https://artsyomni.com/hyliaserif" target="_blank" class="credit">Hylia Serif</a>
						<a href="https://www.dafont.com/super-mario-256.font" target="_blank" class="credit">Super Mario 256</a>
						<a href="https://www.fontspace.com/minecraft-ten-font-f40317" target="_blank" class="credit">Minecraft Ten</a>
						<a href="https://www.fontspace.com/minecraft-evenings-font-f17735" target="_blank" class="credit">Minecraft Evenings</a>
						<a href="https://www.dafont.com/in-your-face-joffrey.font" target="_blank" class="credit">In your face, Joffrey!</a>
						<a href="https://www.fontspace.com/videobeast-80s-font-f2400" target="_blank" class="credit">Pacman Dots</a>
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
