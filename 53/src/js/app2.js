import '../css/app2.css'
import $ from 'jquery'

const $menu = $('#app2>.menu')
const $content = $('#app2>.content')

$menu.on('click', 'li', e => {
  const index = $(e.currentTarget).index()
  $(e.currentTarget).addClass('active')
    .siblings().removeClass('active')
  $content.children().eq(index).addClass('active')
    .siblings().removeClass('active')
})

$menu.children().eq(0).trigger('click')