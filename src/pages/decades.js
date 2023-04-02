import $ from 'jquery';
import MainTitleScreen from '../components/main-title-screen';
import DecadeScreen from '../components/decade';
import gsap from '../utils/gsap';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll/index'
import easing from 'easing-js'

const decades = (props) => {
	let scroll;
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
		let years = [1970, 1980, 1990, 2000, 2010, 2020];
		let decades = years.map((year) => DecadeScreen({ year })).join('\n');
		let main_title_screen = await MainTitleScreen({
			title: 'Video Game History',
		});
		let page = `${main_title_screen}
        <div id="decades">
            ${decades}
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
		// gsap.to('.main-screen', {rotation: 27, x: 100, duration: 1})
		Scrollbar.use(OverscrollPlugin)
		const scrollbar = Scrollbar.init(document.querySelector('#body'), {
			damping: 0.15
		})
		scrollbar.updatePluginOptions('overscroll', {
			effect: 'glow',
		})
		console.log(easing)
	};
	beforeRender();
	render();
	setTimeout(() => {
		afterRender();
	}, 100);
};

export default decades;
