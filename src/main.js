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

loadItems()
  .then((items) => {
    // displayItems(items)
    // setEventListener(items)
  })
  .catch((err) => {
    console.error(err)
  })
