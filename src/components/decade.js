import $ from 'jquery';
import galaxian from 'bundle-text:../assets/svg/galaxian-ship.svg'
import among_us from 'bundle-text:../assets/svg/among-us-red-ejected.svg'
import pacman from 'bundle-text:../assets/svg/pacman.svg'
import mario_coin from 'bundle-text:../assets/svg/mario-coin.svg'
import gsap from '../utils/gsap';
import { mapCalc } from '../utils';

const DecadeScreen = (props = {}) => {
    let title = props?.year
    const beforeRender = () => {
      switch(props?.year) {
        case 1970:
          break
        case 1980:
          title = `${title}`.split('').map((l) => `<span>${l}</span>`).join('')
          break
        case 1990:
          break
        case 2000:
          break
        case 2010:
          title = `${title}`.split('').map((l) => `<div>${l}</div>`).join('')
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
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-char">${galaxian}</div>`)
          $(`#decade-${props?.year}`).on('mousemove', (event) => {
            let svg = $('.svg-char:has(> .galaxian)')
            let transform = svg.css('transform').split(/[()]/)[1]
            let [_, __, ___, ____, x, y] = transform.split(', ')
            let center = 1070
            let minHeight = 450
            let newX = event.pageX - center,
              newY = minHeight
            
            newX = (newX >= 950) ? 950 : newX <= -950 ? -950 : newX
            let matrix = `translateY(${newY}px) translateX(${newX}px)`
            if (newX - Number(x) < -75) {
              matrix += " rotateZ(-45deg)"
            } else if (newX - Number(x) > 75) {
              matrix += " rotateZ(45deg)"
            } else {
              matrix += " rotateZ(0deg)"
            }
            svg.css('transform', matrix)
          })
          break
        case 1980:
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-char">${pacman}</div>`)
          gsap.set(`#decade-${props?.year} .title`, { fontFamily: 'Pacman Dots'})
          gsap.fromTo('.pacman', {x: -1920, scale: 6}, {
            x: 1920, 
            duration: 16,
            immediateRender: false,
            scrollTrigger: {
              trigger: `#decade-${props?.year}`,
              start: "top top",
            },
          }, "<")
          gsap.to(`#decade-${props?.year} .title span:nth-child(1)`, {opacity: 0, ease: 'none'}, "+=7")
          gsap.to(`#decade-${props?.year} .title span:nth-child(2)`, {opacity: 0, ease: 'none'}, "+=0.125")
          gsap.to(`#decade-${props?.year} .title span:nth-child(3)`, {opacity: 0, ease: 'none'}, "+=0.125")
          gsap.to(`#decade-${props?.year} .title span:nth-child(4)`, {opacity: 0, ease: 'none'}, "+=0.125")
          gsap.to(`#decade-${props?.year} .title`, {fontFamily: 'CrackMan'}, "+=0")
          gsap.to(`#decade-${props?.year} .title span`, {opacity: 1, ease: 'none'}, "+=5")
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
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-chars"></div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${mario_coin}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${mario_coin}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${mario_coin}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${mario_coin}</div>`)
          let letters = $(`#decade-${props?.year} .title div`)
          console.log("🚀 ~ file: decade.js:96 ~ afterRender ~ letters:", letters)
          letters.each((i, _) => {
            let index = i + 1
            let letter = $(`#decade-${props?.year} .title div:nth-child(${index})`)
            letter.on('click', () => {
              let coin = $(`#decade-${props?.year} .svg-chars .svg-char:nth-child(${index})`)
              console.log("🚀 ~ file: decade.js:101 ~ $ ~ coin:", coin)
              coin.css({ animation: "coin 0.3s cubic-bezier(0.64, 0.57, 0.67, 1.53) both" })
              letter.css({ animation: 'shake-vertical 0.2s linear both' })
              setTimeout(() => {
                coin.css({ animation: "none", opacity: 0 })
                letter.css({ animation: 'none' })
            }, 500)

            })
          })
          break
        case 2020:
          $(`#decade-${props?.year}`).prepend('<div class="stars-container"><div class="stars small"></div><div class="stars medium"></div><div class="stars large"></div></div>')
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-char">${among_us}</div>`)
          gsap.set('.among-us', {x: -1400, rotateZ: 0, scaleY: 2.5})
          gsap.to('.among-us', {
            x: 1400, 
            rotateZ: 360, 
            duration: 8,
            immediateRender: false,
            scrollTrigger: {
              trigger: `#decade-${props?.year}`,
              start: "top top",
            },
          })
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
              <div class="title">${title}</div>
            </div>
          </div>
          <div class="game-screen">
            <div class="game-grid">
            </div>
          </div>
      </div>`;
      setTimeout(() => {
        afterRender()
      }, 400)
			return page
    }
		return render()

}

export default DecadeScreen