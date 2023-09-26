const $setIntervaloutBar = document.querySelector(".setIntervaloutBar");
const $requestAnimationFrameBar = document.querySelector(
  ".requestAnimationFrameBar"
);
const $startButton = document.querySelector(".startButton");

let setIntervaloutBarWidth = 10;
let requestAnimationFrameBarWidth = 10;

const maxWidth = window.innerWidth;

const setIntervaloutBar = () => {
  const timer = setInterval(() => {
    if (setIntervaloutBarWidth > maxWidth) clearInterval(timer);
    else {
      $setIntervaloutBar.style.width = `${setIntervaloutBarWidth}px`;
      setIntervaloutBarWidth += 10;
    }
  }, 1000 / 60); //초당 60프레임
};

let animationId = null;

const startRequestAnimationFrameBar = (v) => {
  if (requestAnimationFrameBarWidth > maxWidth)
    cancelAnimationFrame(animationId);
  else {
    $requestAnimationFrameBar.style.width = `${requestAnimationFrameBarWidth}px`;
    requestAnimationFrameBarWidth += 10;
  }
  animationId = requestAnimationFrame(startRequestAnimationFrameBar);
};

const onClickStartButton = () => {
  $startButton.disabled = true;
  setIntervaloutBar();
  requestAnimationFrame(startRequestAnimationFrameBar);
};
