function ajaxGet(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status < 400) {
      callback(xhr.response)
    }
  }
  xhr.send()
}

function ajaxProxy(url, type, target) {
  ajaxGet('/public/' + url, data => {
    let div = document.createElement(type)
    div.innerHTML = data
    target.appendChild(div)
  })
}

getCSS.onclick = () => ajaxProxy('style.css', 'style', document.head)
getJS.onclick = () => ajaxProxy('2.js', 'script', document.body)
getHTML.onclick = () => ajaxProxy('3.html', 'div', document.body)
getXML.onclick = () => ajaxProxy('4.xml', 'div', document.body)
getJSON.onclick = () => ajaxProxy('5.json', 'div', document.body)

let changePage = (() => {
  let page = 1
  let maxPage = 3, minPage = 1
  return (offset) => {
    let target = page + offset
    if (target < minPage || target > maxPage) {
      alert('没有更多数据了')
      return
    }
    ajaxGet('/db/page' + target.toString() + '.json', data => {
      data = JSON.parse(data)
      let newString = '<ul>' + data.map(item => '<li>id=' + item.id + '</li>').join('').toString() + '</ul>'
      pageTarget.innerHTML = newString
      page = target
    })
  }
})()


changePage(0)