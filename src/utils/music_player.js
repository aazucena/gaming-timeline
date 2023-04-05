import { Howl } from "howler";

import galaxian from 'url:../assets/audio/galaxian.mp3'
import pacman from 'url:../assets/audio/pacman.mp3'
import ocarina_of_time from 'url:../assets/audio/ocarina_of_time.mp3'
import minecraft from 'url:../assets/audio/minecraft.mp3'
import super_mario_galaxy_2 from 'url:../assets/audio/super_mario_galaxy_2.mp3'
import among_us from 'url:../assets/audio/among_us.mp3'

const music_player = {
  '1970': new Howl({
    src: [galaxian],
    volume: 0.5,
    onplay: (id) => {
      let status = `Music #${id}: Galaxian`
      console.log(`Playing (${status})`)
    },
    onstop: (id) => {
      let status = `Music #${id}: Galaxian`
      console.log(`Stopping (${status})`)
    }
  }),
  '1980': new Howl({
    src: [pacman],
    volume: 0.5,
    onplay: (id) => {
      let status = `Music #${id}: Pac-man`
      console.log(`Playing (${status})`)
    },
    onstop: (id) => {
      let status = `Music #${id}: Pac-man`
      console.log(`Stopping (${status})`)
    }
  }),
  '1990': new Howl({
    src: [ocarina_of_time],
    volume: 0.5,
    onplay: (id) => {
      let status = `Music #${id}: Ocarina of Time`
      console.log(`Playing (${status})`)
    },
    onstop: (id) => {
      let status = `Music #${id}: Ocarina of Time`
      console.log(`Stopping (${status})`)
    }
  }),
  '2000': new Howl({
    src: [minecraft],
    volume: 0.5,
    onplay: (id) => {
      let status = `Music #${id}: Minecraft`
      console.log(`Playing (${status})`)
    },
    onstop: (id) => {
      let status = `Music #${id}: Minecraft`
      console.log(`Stopping (${status})`)
    }
  }),
  '2010': new Howl({
    src: [super_mario_galaxy_2],
    volume: 0.5,
    onplay: (id) => {
      let status = `Music #${id}: Super Mario Galaxy 2`
      console.log(`Playing (${status})`)
    },
    onstop: (id) => {
      let status = `Music #${id}: Super Mario Galaxy 2`
      console.log(`Stopping (${status})`)
    }
  }),
  '2020': new Howl({
    src: [among_us],
    volume: 0.5,
    onplay: (id) => {
      let status = `Music #${id}: Among Us`
      console.log(`Playing (${status})`)
    },
    onstop: (id) => {
      let status = `Music #${id}: Among Us`
      console.log(`Stopping (${status})`)
    }
  }),
}

export default music_player