const $helloId = document.getElementById("hello");
const $helloClass = document.getElementsByClassName("hello");
console.log($helloId); // id는 1개만
console.log($helloClass); // class는 여러개

// querySelectorAll은 id든 class든 전부가져온다
const $helloIdQuerySelector = document.querySelectorAll("#hello");
const $helloClassQuerySelector = document.querySelectorAll(".hello");
console.log($helloIdQuerySelector);
console.log($helloClassQuerySelector);

// HTMLCollection과 nodeList는 둘다 이터러블이다
// HTMLCollection은 live, nodeList는 non-live
const $ul = [...document.getElementsByTagName("ul")][0];
$ul.innerHTML += `  <li id="hello" class="hello">헬로4</li>`;
console.log($helloClass); // HTMLCollection의 개수는 변하지만
console.log($helloClassQuerySelector); // NodeList의 개수는 변하지 않는다
