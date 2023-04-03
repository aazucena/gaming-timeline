
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { 
  OverlayScrollbars, 
  ScrollbarsHidingPlugin, 
  SizeObserverPlugin, 
  ClickScrollPlugin 
} from 'overlayscrollbars';

OverlayScrollbars.plugin([ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin]);

const overlay_scrollbars = () => {
  OverlayScrollbars(document.querySelector('#body'), {
    overflow: {
      x: 'hidden',
    },
  })
}

export default overlay_scrollbars