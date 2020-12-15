import text from './css.js'

let player = {
  n: 1,
  events: {
    'description': ''
  },
  init() {

  }
}

player.init()

let style = document.querySelector('#style')
let app = document.querySelector('#code')

let len = text.length
let n = 0

style.innerHTML = '/*'

let step = () => {
  if (n >= len) {
    return
  }
  setTimeout(() => {
    let cur = text[n]

    if (cur === '.' && text[n - 1] === '\n') {
      style.innerHTML += '*/\n.'
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