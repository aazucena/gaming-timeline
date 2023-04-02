import $ from 'jquery';

const MainTitleScreen = async(props) => {
		let title = props.title
    const update = async() => {
			let interval;
			interval = setInterval(() => {

			}, 10)
    }
    const beforeRender = async() => {
			title = title.split('').map((lt) => lt !== ' ' ? `<span class="ani-title">${lt}</span>` : lt).join('')
    }
    const afterRender = async() => {
			update()
    }
    const render = async() => {
			beforeRender()
			let page = `
					<div id="main">
							<div class="main-screen" id="main-screen">
									<div class="header">
										<div class="title" data-scroll>${title}</div>
									</div>
							</div>
					</div>`;
			afterRender()
			return page
    }
		return await render()
} 

export default MainTitleScreen