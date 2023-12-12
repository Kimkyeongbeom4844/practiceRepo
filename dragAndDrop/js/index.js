const $box = document.querySelector(".box");
let firstCoords = null;
let transform = null;

$box.addEventListener("mousedown", (e) => {
  firstCoords = { x: e.pageX, y: e.pageY }; // 마우스 다운시 첫 마우스 x,y좌표 저장
  transform = $box.style.transform
    .replace(/(translate|\(|\)| |px)/gi, "")
    .split(",")
    .map((v) => Number(v)); //마우스 움직이기전 transform 상태 저장
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
  if (firstCoords !== null) {
    firstCoords = null;
  }
});
