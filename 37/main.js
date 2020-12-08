window.dom = {
  create(tagOrHTML) {
    let node
    if (tagOrHTML[0] === '<') {
      node = document.createElement('template')
      node.innerHTML = tagOrHTML
      return node.content.firstChild
    } else {
      return document.createElement(tagOrHTML)
    }
  },
  remove(target) {
    target.parentNode.remove(target)
    return target
  },
  find(selector) {
    return document.querySelectorAll(selector)
  },
  attr(target, key, value) {
    target[key] = value
  },
  style(target, key, value) {
    target.style[key] = value
  },
  each(target, fn) {
    for (let it of target) fn(it)
  },
  append(target, nodeOrString) {
    let node = nodeOrString
    if (typeof nodeOrString === 'string') {
      node = document.createTextNode(nodeOrString)
    }
    target.appendChild(node)
  },
  addEvent(target, event, fn) {
    target.addEventListener(event, fn)
  },
  children(target) {
    return target.children
  },
  siblings(target) {
    return Array.from(target.parentNode.children).reduce((sum, it) => it === a ? sum : sum.concat([it]), [])
  }
}

const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素