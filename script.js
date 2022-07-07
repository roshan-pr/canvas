let toggle = true;
const toggler = () => toggle = !toggle;

const undoer = (event) => {
  const lastPoint = document.getElementById('canvas').lastChild;
  if (lastPoint) {
    document.getElementById('canvas').removeChild(lastPoint);
  }
};

const helpers = (event) => {
  const keypress = event.key;
  if (keypress === 't') toggler();
  if (keypress === 'u') undoer();
};

const createElement = ({ clientX, clientY }) => {
  const div = document.createElement('div');
  div.setAttribute('style',
    `position:absolute; top:${clientY}px; left:${clientX}px`);
  div.setAttribute('class', 'point');
  return div;
};

const color = (event) => {
  console.log(event);
  if (toggle) {
    document.getElementById('canvas').appendChild(createElement(event));
  }
};

window.onload = () => {
  document.getElementById('canvas').addEventListener('mousemove', (event) => color(event));
  document.addEventListener('keypress', () => helpers(event));
};
