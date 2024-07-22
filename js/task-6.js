function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('#controls input');

const btnCreate = document.querySelector('[data-create]');

const btnDestroy = document.querySelector('[data-destroy]');

const divEl = document.querySelector('#boxes');

function createBoxes(amount){
  divEl.innerHTML = '';
  let size = 30;

  for(let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    divEl.append(box);
    size += 10;
  };
};

const onBtnCreateClick = event => {
  const amount = inputEl.value;
  
  if(amount >= 1 && amount <= 100){
    createBoxes(amount);
    inputEl.value = '';
  }
};

btnCreate.addEventListener('click', onBtnCreateClick);
 
function destroyBoxes () {
  divEl.innerHTML = '';
};

const onBtnDestroyClick = event => {
  destroyBoxes ();
};

btnDestroy.addEventListener('click', onBtnDestroyClick);