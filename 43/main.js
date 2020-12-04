base_navs = [{ 'href': 'https://ringoer.com', 'desp': 'Ringoer\'s Site', 'logo': 'R' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },
{ 'href': 'https://baidu.com', 'desp': '百度', 'logo': 'B' },]

let navList = JSON.parse(localStorage.getItem('navList'))
if (!navList) {
  navList = base_navs
}
draw()

function draw() {
  let container = document.querySelector('.container')
  container.innerHTML = ''
  for (let i = 0; i < navList.length; i++) {
    let nav = navList[i]
    container.appendChild(createCard(i, nav.href, nav.desp, nav.logo))
  }
  container.appendChild(createCard(navList.length, '/', '添加', '+'))
  localStorage.setItem('navList', JSON.stringify(navList))
}

function search() {
  let baseUrl = 'https://www.baidu.com/s?ie=UTF-8&wd='
  let keyword = document.querySelector('#keyword').value
  keyword = keyword.replaceAll(' ', '%20')
  window.open(baseUrl + keyword)
}

function createCard(i, href, desp, logo) {
  let card = document.createElement('div')
  card.className = 'card'
  card.addEventListener('click', () => {
    if (logo === '+') {
      let tab = document.querySelector('#tab')
      tab.style.display = 'flex';
      return
    }
    window.open(href)
  }, false)
  if (logo === '+') {
    card.innerHTML = '<div class="logo">' + logo + '</div>' +
      '<div class="desp">' + desp + '</div>'
  }
  else {
    card.innerHTML = '<div class="delete" onclick="deleteCard(' + i.toString() + ',event)">×</div>' +
      '<div class="logo">' + logo + '</div>' +
      '<div class="desp">' + desp + '</div>'
  }


  return card
}

function insertCard() {
  let url = document.querySelector('#url').value
  let desp = document.querySelector('#desp').value
  if (!url.match('[http|https]://*')) {
    alert('请输入包含http或https的链接格式！')
    return
  } else {
    let tab = document.querySelector('#tab')
    tab.style.display = 'none';
  }
  let logo = (url.split('//')[1])[0].toUpperCase()

  navList.push(JSON.parse('{ "href": "' + url + '", "desp": "' + desp + '", "logo": "' + logo + '" }'))

  draw()
}

function deleteCard(i, event) {
  let ans = confirm('确定要删除这个标签吗？')
  if (ans) {
    navList.splice(i, 1)
    draw()
  }

  event.stopPropagation()
}

function cancel() {
  let tab = document.querySelector('#tab')
  tab.style.display = 'none';
}