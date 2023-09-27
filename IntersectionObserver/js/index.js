(async () => {
  const $wrap = document.querySelector(".wrap");

  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  console.log(data); //jsonplaceholder의 공식문서에 따르면 data의 length는 5000개;

  for (let i = 0; i < 100; i++) {
    const { title, thumbnailUrl } = data[i];
    $wrap.innerHTML += `
      <div>
        <img src=${thumbnailUrl}/>
        <p style="padding : 5px;">${title}</p>
      </div>
    `;
  }
  console.log($wrap.children);
  const observer = new IntersectionObserver(
    (elem) => {
      for (let i = 0; i < elem.length; i++) {
        if (elem[i].isIntersecting) {
          elem[i].target.classList.remove("hidden");
        } else {
          elem[i].target.classList.add("hidden");
        }
      }
    },
    {
      threshold: 0.5, //요소의 볼수 있는 영역이 50%가 넘어갈때 앞의 콜백함수 실행(기본값은 0)
    }
  );

  for (let i = 0; i < $wrap.children.length; i++) {
    observer.observe($wrap.children[i]);
  }
})();
