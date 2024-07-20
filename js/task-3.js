const fieldEl = document.querySelector('#name-input');
console.dir(fieldEl);
const spanEl = document.querySelector('#name-output');
console.log(spanEl);


fieldEl.addEventListener('input', (event) => {
   const correctFieldEl = fieldEl.value.trim();
   if (!correctFieldEl) {
    return spanEl.textContent = 'Anonymous';
   };
    spanEl.textContent = correctFieldEl;   
});

