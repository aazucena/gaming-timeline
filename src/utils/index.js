import $ from 'jquery';

const isInView = (elem) => {
  let document_view = {}
  document_view.top = $(window).scrollTop()
  document_view.bottom = document_view.top + $(window).height()
  let element_view = {}
  element_view.top = $(elem).offset().scrollTop()
  element_view.bottom = document_view.top + $(elem).height()

  return ((element_view.bottom <= document_view.bottom) && (element_view.top >= document_view.top))
}

/**
 * @references https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
 * @param {*} in_min 
 * @param {*} in_max 
 * @param {*} out_min 
 * @param {*} out_max 
 * @returns 
 */
const mapCalc = (value, in_min, in_max, out_min, out_max) =>  {
  return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

/**
 * @references https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
const randomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export { isInView, mapCalc, randomInteger }