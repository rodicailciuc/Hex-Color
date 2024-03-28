import { dom } from '../dom/dom.js';
import { changeBG } from '../handlers/changeBG.js';

export const clickBtn = () => {
  dom.btnColor.addEventListener('click', changeBG);
};
