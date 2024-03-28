import { dom } from '../dom/dom.js';

export const domManipulation = (randomColor) => {
  dom.body.style.backgroundColor = randomColor;
  dom.display.innerText = ` Hex code : ${randomColor}`;
};
