import $ from 'jquery';
import MainTitleScreen from '../components/main-title-screen';
import DecadeScreen from '../components/decade';

const decades = (props) => {
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
		let years = [
			1970,
			1980,
			1990,
			2000,
			2010,
			2020,
		]
		let decades = years.map((year) => DecadeScreen({ year })).join('\n')
		let main_title_screen = await MainTitleScreen({ title: 'Video Game History' })
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

	const afterRender = async () => {};
	beforeRender();
	render();
	afterRender();
};

export default decades;
