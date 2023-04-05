import $ from 'jquery';
import music_player from '../utils/music_player';

const ExitScreen = async(props) => {
  const update = async() => {
    let interval;
    interval = setInterval(() => {

    }, 10)
  }
  const beforeRender = async() => {
  }
  const afterRender = async() => {
    update()
    $('#exit-screen .button').on('click', async() => {
      console.log("Exit")
      let page = (await import('../pages/start.js')).default
      page()
    })
  }
  const render = async() => {
    beforeRender()
    let page = `
        <div id="exit">
            <div class="exit-screen" id="exit-screen">
                <div class="header">
                  <div class="button">Exit</div>
                </div>
            </div>
        </div>`;
    setTimeout(() => {
      afterRender()
    }, 400)
    return page
  }
  return await render()
} 

export default ExitScreen