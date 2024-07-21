const bodyEl = document.querySelector('body');
console.log(bodyEl);

const spanEl = document.querySelector('.color');
console.log(spanEl);

const btnChangeColor = document.querySelector('.change-color');
console.log(btnChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const onBtnClick = event => {
  // const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
};

btnChangeColor.addEventListener('click', onBtnClick);






