import $ from 'jquery';
const DecadeScreen = (props = {}) => {
    const beforeRender = () => {
    }
    const afterRender = () => {
    }
    const render = () => {
			beforeRender()
			let page = `
      <div class="decade" id="decade-${props?.year}">
          <div class="title-screen">
            <div class="header">
              <div class="title">${props?.year}</div>
            </div>
          </div>
          <div class="game-screen">
            <div class="game-grid">
            </div>
          </div>
      </div>`;
			afterRender()
			return page
    }
		return render()

}

export default DecadeScreen