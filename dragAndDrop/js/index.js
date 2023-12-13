// e.pageX로 구현
const $box = document.querySelector(".box");
let firstCoords = null;
let transform = null;

$box.addEventListener("mousedown", (e) => {
  firstCoords = { x: e.pageX, y: e.pageY }; // 마우스 다운시 첫 마우스 x,y좌표 저장
  if ($box.style.transform === "") {
    transform = [0, 0];
  } else {
    transform = $box.style.transform
      .replace(/(translate|\(|\)| |px)/gi, "")
      .split(",")
      .map((v) => Number(v)); //마우스 움직이기전 transform 상태 저장
  }
});
window.addEventListener("mousemove", (e) => {
  if (firstCoords !== null) {
    const x = e.pageX - firstCoords.x;
    const y = e.pageY - firstCoords.y;
    $box.style.transform = `translate(${transform[0] + x}px,${
      transform[1] + y
    }px)`;
  }
});
window.addEventListener("mouseup", () => {
  firstCoords = null;
});

// e.movementX로 구현
// const $box = document.querySelector(".box");
// let isDrag = false;

// $box.addEventListener("mousedown", (e) => {
//   isDrag = true;
// });
// window.addEventListener("mousemove", (e) => {
//   if (isDrag === true) {
//     let transform = null;
//     if ($box.style.transform === "") {
//       transform = [0, 0];
//     } else {
//       transform = $box.style.transform
//         .replace(/(translate|\(|\)| |px)/gi, "")
//         .split(",")
//         .map((v) => Number(v));
//     }
//     $box.style.transform = `translate(${transform[0] + e.movementX}px,${
//       transform[1] + e.movementY
//     }px)`;
//   }
// });
// window.addEventListener("mouseup", () => {
//   isDrag = false;
// });
