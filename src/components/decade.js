import $ from 'jquery';
const DecadeScreen = (props = {}) => {
    let title = props?.year
    const beforeRender = () => {
      switch(props?.year) {
        case 1970:
          break
        case 1980:
          break
        case 1990:
          break
        case 2000:
          break
        case 2010:
          title = `${title}`.split('').map((l) => `<span>${l}</span>`).join('')
          break
        case 2020:
          break
        default:
          break
      }
    }
    const afterRender = () => {
      switch(props?.year) {
        case 1970:
          $(`#decade-${props?.year}`).prepend('<div class="stars-container"><div class="stars small"></div><div class="stars medium"></div><div class="stars large"></div></div>')
          break
        case 1980:
          break
        case 1990:
          break
        case 2000:
          $(`#decade-${props?.year} .title`).on('click', () => {
            let title = $(`#decade-${props?.year} .title`)
            title.css({ 'font-family': 'Minecraft Evenings', animation: "minecraft-shake 0.1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both" })
            setTimeout(() => {
              title.css({ animation: "none" })
            }, 100)
  
          })
          break
        case 2010:
          $(`#decade-${props?.year}`).prepend('<div class="stars-container"><div class="stars small"></div><div class="stars medium"></div><div class="stars large"></div></div>')
          break
        case 2020:
          $(`#decade-${props?.year}`).prepend('<div class="stars-container"><div class="stars small"></div><div class="stars medium"></div><div class="stars large"></div></div>')
          break
        default:
          break
      }
    }
    const render = () => {
			beforeRender()
			let page = `
      <div class="decade" id="decade-${props?.year}">
          <div class="title-screen">
            <div class="header">
              <div class="title" title="${props?.year}">${title}</div>
            </div>
          </div>
          <div class="game-screen">
            <div class="game-grid">
            </div>
          </div>
      </div>`;
      setTimeout(() => {
        afterRender()
      }, 100)
			return page
    }
		return render()

}

export default DecadeScreen