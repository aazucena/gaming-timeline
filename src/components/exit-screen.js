import $ from 'jquery';

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
    afterRender()
    return page
  }
  return await render()
} 

export default ExitScreen