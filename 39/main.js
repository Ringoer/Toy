window.$ = window.jQuery = function (data) {
  let el = [data]
  if (typeof data === 'string') {
    if (data[0] === '<') {
      let t = document.createElement('template')
      t.innerHTML = data
      el = [t.content.firstChild]
    } else {
      el = document.querySelectorAll(data)
    }
  }
  const api = Object.create(jQuery.prototype)
  Object.assign(api, {
    el: el,
    oldApi: data.oldApi,
  })
  return api
}

jQuery.fn = jQuery.prototype = {
  find(selector) {
    let ans = []
    for (let it of this.el) {
      ans = ans.concat(Array.from(it.querySelectorAll(selector)))
    }
    ans.oldApi = this
    return $(ans)
  },
  parent() {
    let ans = []
    for (let it of this.el) {
      ans.push(it.parentNode)
    }
    ans.oldApi = this
    return $(ans)
  },
  children() {
    let ans = []
    for (let it of this.el) {
      ans = ans.concat(Array.from(it.children))
    }
    ans.oldApi = this
    return $(ans)
  },
  siblings() {
    let ans = []
    for (let it of this.el) {
      ans = ans.concat(Array.from(it.parentNode.children).reduce((sum, cur) => cur === it ? sum : sum.concat([cur]), []))
    }
    ans.oldApi = this
    return $(ans)
  },
  index() {
    let ans = []
    for (let it of this.el) {
      ans.push(Array.from(it.parentNode.children).indexOf(it))
    }
    return ans
  },
  next() {
    let ans = []
    for (let it of this.el) {
      let tmp = Array.from(it.parentNode.children)
      ans.push(tmp[tmp.indexOf(it) + 1])
    }
    ans.oldApi = this
    return $(ans)
  },
  prev() {
    let ans = []
    for (let it of this.el) {
      let tmp = Array.from(it.parentNode.children)
      ans.push(tmp[tmp.indexOf(it) - 1])
    }
    ans.oldApi = this
    return $(ans)
  },
  each(fn) {
    for (let it of this.el) {
      fn(it)
    }
    return this
  },
  size() {
    return this.el.length
  },
  // length: this.el.length,
  get(index) {
    if (!index && index !== 0) return this.el
    return this.el[index]
  },
  firstChild() {
    let ans = this.get(0)
    ans.oldApi = this
    return $(ans)
  },
  lastChild() {
    let ans = this.get(this.size() - 1)
    ans.oldApi = this
    return $(ans)
  },
  append(node) {
    let arr = [node], target = this.lastChild()
    if (typeof node === 'string') {
      let t = document.createElement('template')
      t.innerHTML = node
      arr = [t.content.firstChild]
    } else if (node instanceof $) {
      arr = node.get()
    }
    for (let it of arr) {
      target.appendChild(it)
    }
    return this
  },
  appendTo(node) {
    for (let it of this.el) {
      node.appendChild(it)
    }
    return this
  },
  prepend(node) {
    let arr = [node], target = this.lastChild()
    if (typeof node === 'string') {
      let t = document.createElement('template')
      t.innerHTML = node
      arr = [t.content.firstChild]
    } else if (node instanceof $) {
      arr = node.get()
    }
    for (let it of arr) {
      target.prepend(it)
    }
    return this
  },
  after(node) {
    let arr = [node], target = this.lastChild()
    if (node instanceof $) {
      arr = node.get()
    }
    for (let it of arr) {
      target.after(it)
    }
    return this
  },
  before(node) {
    let arr = [node], target = this.lastChild()
    if (node instanceof $) {
      arr = node.get()
    }
    for (let it of arr) {
      target.before(it)
    }
    return this
  },
  remove() {
    for (let it of this.el) {
      it.remove()
    }
    return this
  },
  empty() {
    for (let it of this.el) {
      it.innerHTML = ''
    }
    return this
  },
  text(str) {
    if (!str) {
      let ans = []
      for (let it of this.el) {
        ans.push(it.innerText)
      }
      return ans
    } else {
      for (let it of this.el) {
        it.innerText = str
      }
      return this
    }
  },
  html(str) {
    if (!str) {
      let ans = []
      for (let it of this.el) {
        ans.push(it.innerHTML)
      }
      return ans
    } else {
      for (let it of this.el) {
        it.innerHTML = str
      }
      return this
    }
  },
  attr(key, value) {
    if (!value) {
      let ans = []
      for (let it of this.el) {
        ans.push(it[key])
      }
      return ans
    } else {
      for (let it of this.el) {
        it[key] = value
      }
      return this
    }
  },
  style(obj) {
    if (!obj) {
      let ans = []
      for (let it of this.el) {
        ans.push(it.style)
      }
      return ans
    } else if (typeof obj === "string") {
      for (let it of this.el) {
        it.style = obj
      }
      return this
    } else {
      for (let it of this.el) {
        for (let key in obj) {
          it.style[key] = obj[key]
        }
      }
      return this
    }
  },
  addClass(className) {
    for (let it of this.el) {
      it.classList.add(className)
    }
    return this
  },
  removeClass(className) {
    for (let it of this.el) {
      it.classList.remove(className)
    }
    return this
  },
  hasClass(className) {
    for (let it of this.el) {
      if (it.classList.contains(className)) {
        return true
      }
    }
    return false
  },
  on(eventName, fn) {
    for (let it of this.el) {
      it.addEventListener(eventName, fn)
    }
    return this
  },
  off(eventName, fn) {
    for (let it of this.el) {
      it.removeEventListener(eventName, fn)
    }
    return this
  },
  end() {
    return this.oldApi
  },
}

// $('#test').find('.child').addClass('red')

let a = $('.taskItem:nth-child(4)')
