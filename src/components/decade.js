import $ from 'jquery';
import galaxian from 'bundle-text:../assets/svg/galaxian-ship.svg'
import among_us from 'bundle-text:../assets/svg/among-us-red-ejected.svg'
import pacman from 'bundle-text:../assets/svg/pacman.svg'
import mario_coin from 'bundle-text:../assets/svg/mario-coin.svg'
import ocarina_note from 'bundle-text:../assets/svg/ocarina-note.svg'
import zelda_video from 'url:../assets/videos/ocarina-of-time-intro-nofade.mp4'
import gsap from '../utils/gsap';
import music_player from '../utils/music_player';
import sfx from '../utils/sfx';
import ocarina from '../utils/ocarina';
import { randomInteger } from '../utils';
import { ScrollTrigger } from 'gsap/all';

const DecadeScreen = (props = {}) => {
    let title = props?.year
    let decades = [1970, 1980, 1990, 2000, 2010, 2020] 
    const playSound = (decade) => {
      if ($('#app > #decades').length > 0) {
        let music = music_player[decade]
        music.volume(0.25)
        ScrollTrigger.create({
          trigger: `#decade-${props?.year}`,
          start: "top top",
          end: `bottom${decade !== 2020 ? "+=80px" : ""} bottom`,
          onEnter: ({progress, direction, isActive}) => {
            decades.forEach((dec) => {
              if (dec !== decade) {
                music_player[dec].stop()
              }
            })
            music.play()
            console.log("onEnter")
            if (decade === 1980) {
              
              console.log('Start Pac-man')
              gsap.set(`#decade-${props?.year} .title`, { fontFamily: 'Pacman Dots' })
              gsap.fromTo(`#decade-${props?.year} .pacman`, {x: -1800, scale: 6}, {
                x: 1800, 
                duration: 7,
                immediateRender: false,
              })
              gsap.to(`#decade-${props?.year} .title span:nth-child(1)`, {opacity: 0, ease: 'none'}, "-=5")
              gsap.to(`#decade-${props?.year} .title span:nth-child(2)`, {opacity: 0, ease: 'none'}, "-=4.75")
              gsap.to(`#decade-${props?.year} .title span:nth-child(3)`, {opacity: 0, ease: 'none'}, "-=4.5")
              gsap.to(`#decade-${props?.year} .title span:nth-child(4)`, {opacity: 0, ease: 'none'}, "-=4.25")
              gsap.to(`#decade-${props?.year} .title`, {fontFamily: 'CrackMan'}, ">")
              gsap.to(`#decade-${props?.year} .title span`, {opacity: 1, ease: 'none'}, ">")
            }
          },
          onLeave: ({progress, direction, isActive}) => {
            decades.forEach((dec) => {
              if (dec !== decade) {
                music_player[dec].stop()
              }
            })
            music.stop()
          },
          onEnterBack: ({progress, direction, isActive}) => {
            decades.forEach((dec) => {
              if (dec !== decade) {
                music_player[dec].stop()
              }
            })
            music.play()
            console.log("onEnterBack")

            if (decade === 1980) {
              
              console.log('Start Pac-man')
              gsap.set(`#decade-${props?.year} .title`, { fontFamily: 'Pacman Dots' })
              gsap.fromTo(`#decade-${props?.year} .pacman`, { zIndex: 7777, x: -1800, scale: 6}, {
                x: 1800, 
                duration: 7,
                immediateRender: false,
              })
              gsap.to(`#decade-${props?.year} .title span:nth-child(1)`, {opacity: 0, ease: 'none'}, "-=5")
              gsap.to(`#decade-${props?.year} .title span:nth-child(2)`, {opacity: 0, ease: 'none'}, "-=4.75")
              gsap.to(`#decade-${props?.year} .title span:nth-child(3)`, {opacity: 0, ease: 'none'}, "-=4.5")
              gsap.to(`#decade-${props?.year} .title span:nth-child(4)`, {opacity: 0, ease: 'none'}, "-=4.25")
              gsap.to(`#decade-${props?.year} .title`, {fontFamily: 'CrackMan'}, ">")
              gsap.to(`#decade-${props?.year} .title span`, {opacity: 1, ease: 'none'}, "+=6")
            }
          },
          onLeaveBack: ({progress, direction, isActive}) => {
            decades.forEach((dec) => {
              if (dec !== decade) {
                music_player[dec].stop()
              }
            })
            music.stop()
          },
        })
      }
    }

    const beforeRender = () => {
      switch(props?.year) {
        case 1970:
          title = `${title}`.split('').map((l) => `<div>${l}</div>`).join('')
          break
        case 1980:
          title = `${title}`.split('').map((l) => `<span>${l}</span>`).join('')
          break
        case 1990:
          title = `${title}`.split('').map((l) => `<div>${l}</div>`).join('')
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
          playSound(props?.year)
          let laser_animation_name = 'laser-short 0.1s linear both'
          $(`#decade-${props?.year}`).prepend('<div class="stars-container"><div class="stars small"></div><div class="stars medium"></div><div class="stars large"></div></div>')
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-char">${galaxian}</div>`)
          $(`#decade-${props?.year}`).on('click', () => {
            let left_laser = $('.left-laser')
            let right_laser = $('.right-laser')
            left_laser.css({ 'animation': `${laser_animation_name}`})
            right_laser.css({ 'animation': `${laser_animation_name}`})
            sfx.galaxian.play()
            setTimeout(() => {
              left_laser.css({ animation: 'none' })
              right_laser.css({ animation: 'none' })
          }, 400)
          })
          $(`#decade-${props?.year}`).on('mousemove', (event) => {
            let svg = $('.svg-char:has(> .galaxian)')
            let transform = svg.css('transform').split(/[()]/)[1]
            let [_, __, ___, ____, x, y] = transform.split(', ')
            let center = 1070
            let minHeight = 450
            let newX = event.pageX - center,
              newY = minHeight
            
            newX = (newX >= 950) ? 950 : newX <= -950 ? -950 : newX

            laser_animation_name = (newX <= -320 || newX >= 290) ? 'laser-long 0.4s linear both' : 'laser-short 0.1s linear both'
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
          gsap.set(`#decade-${props?.year} .title`, { fontFamily: 'Pacman Dots' })
          playSound(props?.year)
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-char">${pacman}</div>`)
          break
        case 1990:
          playSound(props?.year)
          let note_colors = [
            '#6CBE3A',
            '#E14C4C',
            '#5874ED',
            '#EAB22A',
            '#D14EED',
            '#DCF567',
            '#E2E2E2',
          ]
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-chars"></div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${ocarina_note}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${ocarina_note}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${ocarina_note}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${ocarina_note}</div>`)
          let letters_1990 = $(`#decade-${props?.year} .title div`)
          let sound_note = 0
          letters_1990.each((i, _) => {
            let index = i + 1
            let letter = $(`#decade-${props?.year} .title div:nth-child(${index})`)
            letter.on('click', () => {
              let color = note_colors[randomInteger(0, note_colors.length)]
              ocarina[sound_note].play()
              ocarina[sound_note].on('play', () => {              
                sound_note = (sound_note + 1) % ocarina.length
              })
              let note = $(`#decade-${props?.year} .svg-chars .svg-char:nth-child(${index})`)
              let svg = $(`#decade-${props?.year} .svg-chars .svg-char:nth-child(${index}) .note`)
              note.css({ animation: "note 0.3s cubic-bezier(0.64, 0.57, 0.67, 1.53) both" })
              svg.css({ 'fill': color })
              letter.css({ animation: 'heartbeat 0.6s linear both' })
              setTimeout(() => {
                note.css({ animation: "none", opacity: 0 })
                letter.css({ animation: 'none' })
                svg.css({ 'fill': 'white' })
              }, 500)
              setTimeout(() => {
                letter.css({ animation: 'none' })
              }, 4000)

            })
          })
          $(`#decade-${props?.year} .header`).prepend(`<video class="video" playsinline autoplay muted loop><source src="${zelda_video}" type="video/mp4"></video>`)
          break
        case 2000:
          playSound(props?.year)
          $(`#decade-${props?.year} .title`).on('click', () => {
            let title = $(`#decade-${props?.year} .title`)
            title.css({ 'font-family': 'Minecraft Evenings', animation: "minecraft-shake 0.1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both" })
            sfx.minecraft.play()
            setTimeout(() => {
              title.css({ animation: "none" })
            }, 100)
          })
          break
        case 2010:
          playSound(props?.year)
          $(`#decade-${props?.year}`).prepend('<div class="stars-container"><div class="stars small"></div><div class="stars medium"></div><div class="stars large"></div></div>')
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-chars"></div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${mario_coin}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${mario_coin}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${mario_coin}</div>`)
          $(`#decade-${props?.year} .header .svg-chars`).prepend(`<div class="svg-char">${mario_coin}</div>`)
          let letters_2010 = $(`#decade-${props?.year} .title div`)
          letters_2010.each((i, _) => {
            let index = i + 1
            let letter = $(`#decade-${props?.year} .title div:nth-child(${index})`)
            letter.on('click', () => {
              let coin = $(`#decade-${props?.year} .svg-chars .svg-char:nth-child(${index})`)
              coin.css({ animation: "coin 0.3s cubic-bezier(0.64, 0.57, 0.67, 1.53) both" })
              letter.css({ animation: 'shake-vertical 0.2s linear both' })
              sfx.mario.play()

              setTimeout(() => {
                coin.css({ animation: "none", opacity: 0 })
                letter.css({ animation: 'none' })
            }, 500)

            })
          })
          break
        case 2020:
          playSound(props?.year)
          $(`#decade-${props?.year}`).prepend('<div class="stars-container"><div class="stars small"></div><div class="stars medium"></div><div class="stars large"></div></div>')
          $(`#decade-${props?.year} .header`).prepend(`<div class="svg-char">${among_us}</div>`)

          let a_colors = gsap.utils.random([
            "#C51111",
            "#132ED1",
            "#117F2D",
            "#ED54BA",
            "#EF7D0E",
            "#F6F658",
            "#3F474E",
            "#D6E0F0",
            "#6B31BC",
            "#71491E",
            "#38FEDB",
            "#50EF39",
            "#1D9853",
            "#918977",
          ], true)
          
          $('.among-us .main-color').css({ fill: a_colors() })
          gsap.fromTo('.among-us', {
            x: -1400, 
            rotateZ: 0,
            y: "random(-400, 400)", 
            scale: 2.5
          }, {
            x: 1400, 
            rotateZ: 360, 
            duration: 8,
            immediateRender: false,
            scrollTrigger: {
              trigger: `#decade-${props?.year}`,
              start: "top top",
            },
            repeat:-1,
            repeatRefresh:true,
            onRepeat: () => {
              $('.among-us .main-color').css({ fill: a_colors() })
            }
          }, '<')
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
              <div class="title" draggable="false">${title}</div>
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