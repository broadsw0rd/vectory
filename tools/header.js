/*
 _    __          __                  
| |  / /__  _____/ /_____  _______  __
| | / / _ \/ ___/ __/ __ \/ ___/ / / /
| |/ /  __/ /__/ /_/ /_/ / /  / /_/ / 
|___/\___/\___/\__/\____/_/   \__, /  
                             /____/   
*/

;(function umd (name, root, factory) {
  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    root[name] = factory()
  }
}(
'Vectory',
// better `this` reference, inspired [here](https://github.com/facebook/regenerator/blob/master/runtime.js#L645)
typeof global === 'object' ? global : 
/* istanbul ignore next */
typeof window === 'object' ? window : 
typeof self === 'object' ? self : this,  
function factory () {

