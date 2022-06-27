function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import './banner.js';
import './tabs.js';
import './styles/index.css';
import './styles/index.less';
import $ from 'jquery'; // $('#swiper').css('background-color', 'yellow')

import imgUrl from './assets/1.gif'; // let img = document.createElement('img')
// img.src = imgUrl
// document.body.appendChild(img)

var theImg = document.createElement('img');
theImg.src = imgUrl;
document.body.appendChild(theImg); // 引入字体图标文件

import './assets/fonts/iconfont.css';

var App = /*#__PURE__*/_createClass(function App() {
  _classCallCheck(this, App);
});

_defineProperty(App, "a", 123);

console.log(App.a);