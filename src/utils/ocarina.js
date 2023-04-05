import { Howl } from "howler";

import a_long from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_A_long.wav'
import a_loop from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_A_loop.wav'
import a_medium from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_A_med.wav'
import a_short from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_A_short.wav'
import b_long from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_B_long.wav'
import b_loop from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_B_loop.wav'
import b_medium from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_B_med.wav'
import b_short from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_B_short.wav'
import d_long from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_D_long.wav'
import d_loop from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_D_loop.wav'
import d_medium from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_D_med.wav'
import d_short from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_D_short.wav'
import d2_long from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_D2_long.wav'
import d2_loop from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_D2_loop.wav'
import d2_medium from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_D2_med.wav'
import d2_short from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_D2_short.wav'
import f_long from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_F_long.wav'
import f_loop from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_F_loop.wav'
import f_medium from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_F_med.wav'
import f_short from 'url:../assets/audio/ocarina/OOT_Notes_Ocarina_F_short.wav'


let note = (path, rate = 1) => new Howl({
  src: [path],
  html5: true,
  rate,
  volume: 0.25,
  onplay: (id) => {
  },
  onstop: (id) => {
  }
})


const ocarina = [
  note(a_medium),
  note(d_long),
  note(f_medium),
  note(a_medium),
  note(d_long),
  note(f_medium),
]

export default ocarina