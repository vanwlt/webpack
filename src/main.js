import './banner.js'
import './tabs.js'

import './styles/index.css'

import './styles/index.less'

import $ from 'jquery'

// $('#swiper').css('background-color', 'yellow')

import imgUrl from './assets/1.gif'

// let img = document.createElement('img')
// img.src = imgUrl
// document.body.appendChild(img)
const theImg = document.createElement('img')
theImg.src = imgUrl
document.body.appendChild(theImg)

// 引入字体图标文件
import './assets/fonts/iconfont.css'

class App {
  static a = 123
}

console.log(App.a)
