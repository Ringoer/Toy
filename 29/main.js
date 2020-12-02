let app = document.querySelector('#app')
let style = document.querySelector('#style')
let text = `
你好，我是Ringoer
我现在来画个八卦给你看
先画一个圆形div
#circle{
  top: 20px;
  width: 400px;
  max-width: 40vh;
  height: 400px;
  max-height: 40vh;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border-radius: 50%;
}
然后让div变成大熊猫
#circle{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
接下来再创造两个小圆形
#circle:before{
  border-radius: 50%;
  position: relative;
  background: black;
  left: 50%;
  transform: translateX(-50%);
}
#circle:after{
  border-radius: 50%;
  position: relative;
  background: white;
  left: 50%;
  transform: translateX(-50%);
}
最后让两个小圆形变成大熊猫的眼睛
#circle:before{
  background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}
#circle:after{
  background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 20%);
}
八卦图就画完了!`
let len = text.length
let n = 0

style.innerHTML = '/*'

let step = () => {
  if (n >= len) {
    return
  }
  setTimeout(() => {
    let cur = text[n]

    if (cur === '#') {
      style.innerHTML += '*/\n#'
    } else if (cur === '}') {
      style.innerHTML += '}\n/*'
    } else if (cur === '!') {
      style.innerHTML += '*/'
    } else {
      style.innerHTML += cur
    }

    if (cur === '\n') {
      cur = '<br>'
    } else if (cur === ' ') {
      cur = '&nbsp;'
    }
    app.innerHTML = app.innerHTML + cur
    app.scrollTo(0, 9999)

    n++
    step()
  }, 0)
}

step()