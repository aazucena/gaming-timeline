import { Howl } from "howler";

import galaxian from 'url:../assets/audio/sfx/galaxian.mp3'
import mario from 'url:../assets/audio/sfx/mario-coin.mp3'
import minecraft from 'url:../assets/audio/sfx/minecraft.mp3'

const sfx = {
  'galaxian': new Howl({
    src: [galaxian],
    html5: true,
    volume: 0.75,
  }),
  'mario': new Howl({
    src: [mario],
    html5: true,
    volume: 0.25,
  }),
  'minecraft': new Howl({
    src: [minecraft],
    html5: true,
    volume: 0.75,
  }),
}

export default sfx