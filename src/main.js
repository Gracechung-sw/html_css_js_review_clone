/*
작동 순서
1. main.js 파일이 실행되면
2. loadItems 함수 실행
3. loadItems는 data.json의 데이터를 동적으로 읽어온다. 
  이때 비동기적으로 읽어오니까 items 데이터 자체를 리턴하는게 아니라 promise를 리턴한다. 
4-1. 비동기 처리가 정상적으로 완료되면 받아온ㄴ items를 displayItmes 함수를 통해 HTML에 전달
4-2. 비동기 처리가 완료되지 않으면 catch를 ㄹ이용해서 에러 메세지를 보여준다. 
5. 그리고 HTML에 버튼 메뉴에서 버튼 누르면 그에 맞게 filter 해주는 eventListener 함수 적용
*/

//fetch the Items from the JSON file
function loadItems() {
  return fetch('data/data.json') // fetch(데이터를 받아올 경로) 를 하면 데이터를 잘 받아온다.https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then((res) => {
      console.log((res) => res.json()) //JS에서 JSON을 불러왔기 때문에 json으로 변환
    })
    .then((json) => {
      console.log(json) // 잘 받아왔는지 확인 // 항상 이렇게 console 찍어보면서 확인해가면 좋다.
      json.items //필요한 json.items를 return
    })
}

//Update the list with the given items
function displayItmes(items) {
  //items Array
  const container = document.querySelector('.items')
  //items 데이터 배열을 HTML 요소 <li> 로 변환해주어야 한다. (매핑 해준다.)
  //이처럼 어떤 배열을 다른 형태의 배열로 변환해줄 때는 map을 이용하면 Good
  container.innerHTML = items.map((item) => {
    //일러면 items 가 HTML 요소 <li> 변환된 문자열이 element인 배열이 생성된다.
    createHTMLString(item).join('') //이걸 하나의 문자열로 합쳐서 HTML로 전달해주어야 한다. 이때 join이용
  })
}

//Create HTML list item from the given data item
function createHTMLString(item) {
  return `<li class="item">
  <img src=${item.imgae} , alt=${items.type} , class="item_thumbnail" />
  <span class="item_description">${items.gender} ${items.size} ${items.color}</span>
</li>`
}

function setEventListener(items) {
  const logo = document.querySelector('.logo')
  const buttons = document.querySelector('.buttons') //이벤트 위임 사용
  logo.addEventListener('click', () => {
    displayItems(items) //logo 클릭시 전체 items 보여줌
  })
  buttons.addEventListener('click', (event) => {
    //reference: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    onButtonClick(event, items)
  })
}

function onButtonClick(event, items) {
  //인자로 받아온 event와 items가 뭘까?
  console.log(event, items)

  //어떻게 filtering 할까? HTML에 custom property 사용
  console.log(event.target.dataset.key) //data-key="type"
  console.log(event.target.dataset.value) // data-value="tshirt"

  const dataset = event.target.dataset
  const key = dataset.key
  const value = dataset.value

  if (key === null || value === null) {
    return
  }
  const filteredItem = items.filter((item) => item[key] === values)
  console.log(filteredItem)
  displayItmes(filteredItem)
}

loadItems()
  .then((items) => {
    displayItems(items)
    setEventListener(items)
  })
  .catch((err) => {
    console.error(err)
  })
