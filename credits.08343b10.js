!function(){function e(e){return e&&e.__esModule?e.default:e}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirec5e0;n.register("l1UyA",(function(t,o){var i,s,l,a,d;i=t.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),s=t.exports,l="default",a=function(){return c},Object.defineProperty(s,l,{get:a,set:d,enumerable:!0,configurable:!0});var r=n("9qak9");var c=t=>{(async()=>{e(r)("#app").children().length>0&&(t?.transition&&!isNaN(t?.transition)?e(r)("#app").fadeOut(t?.transition??1e3):e(r)("#app").hide(),e(r)("#app").html())})(),(async()=>{let n='\n      <div id="credits">\n          <div class="console">\n              <div class="console-header">\n                  <div class="console-title">\n                      <span class="title">Credits</span>\n                  </div>\n              </div>\n              <div class="console-terminal">\n                  <div class="terminal-pop">\n                    Press [Enter] to exit\n                  </div>\n              </div>\n          </div>\n      </div>';t?.transition?e(r)("#app").show().html(n).fadeIn(t?.transition??1e3):e(r)("#app").show().html(n)})(),setTimeout((()=>{(async()=>{let t=async t=>{let o=t.originalEvent.key;if(console.log("🚀 ~ file: credits.js:48 ~ onKeyDown ~ key:",o),"Enter"===o){let t=(await Promise.resolve(n("i5Bnl"))).default;e(r)(document).off("keydown"),e(r)(document.body).off("keydown"),setTimeout((()=>{t()}),400)}};e(r)(document).on("keydown",t),e(r)(document.body).on("keydown",t)})()}),500)}}))}();
//# sourceMappingURL=credits.08343b10.js.map