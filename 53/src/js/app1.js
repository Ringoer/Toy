import '../css/app1.css'
import $ from 'jquery'

const prefix = '#app1>'

let n = localStorage.getItem('n') || 100

let $text = $(prefix + '.text')
$text.text(n)

let buttonbox = {
  '#button1': () => n++,
  '#button2': () => n--,
  '#button3': () => n <<= 1,
  '#button4': () => n >>= 1
}
function clickEvent(f) {
  return () => {
    f()
    $text.text(n)
    localStorage.setItem('n', n)
  }
}
for (let selector in buttonbox) {
  $(selector).on('click', clickEvent(buttonbox[selector]))
}