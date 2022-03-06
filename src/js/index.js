import '../style/index.less'

import love from '../images/love.png'

var btn = document.getElementById('btn')
var homeDiv = document.getElementById('home')

btn.addEventListener('click', ()=>{
  var img = document.createElement('img')
  img.src = love
  homeDiv.append(img)
})

console.log('index')