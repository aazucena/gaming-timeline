import 'normalize.css';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import "splitting/dist/splitting.css";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { 
  OverlayScrollbars, 
  ScrollbarsHidingPlugin, 
  SizeObserverPlugin, 
  ClickScrollPlugin 
} from 'overlayscrollbars';
import Splitting from "splitting";
import Lenis from '@studio-freight/lenis';

import StartPage from './pages/start.js'

gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin);
  
OverlayScrollbars.plugin([ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin]);

OverlayScrollbars(document.querySelector('#body'), {})

Splitting()


StartPage()
