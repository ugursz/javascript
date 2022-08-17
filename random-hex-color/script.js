const colorEl = document.querySelector('.color');
const generate = document.querySelector('.generate');
const bodyEl = document.querySelector('body');

function getRandomColor() {
  let color = Math.random().toString(16).substring(2, 8);
  colorEl.textContent = '#' + color;
  bodyEl.style.backgroundColor = colorEl.textContent;
}

generate.addEventListener('click', getRandomColor);
