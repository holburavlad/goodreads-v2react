"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("react")),t=e(require("prop-types")),n=e(require("styled-components"));function i(){var e,r,t=(e=["\n  color: red;\n  font-family: Artifika;\n"],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return i=function(){return t},t}var a=function(e){var t=e.message,n=void 0===t?"This is a CoronaVirus alert":t;return r.createElement("span",null,n)};a.propTypes={message:t.string};var o=n.div(i());exports.Alert=function(e){return r.createElement(o,null,r.createElement(a,e))};