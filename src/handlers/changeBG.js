import { generateRandomColor } from '../utils/generateRandomColor.js';
import { domManipulation } from '../components/domManipulation.js';

export const changeBG = () => {
  const hexColor = generateRandomColor();
  domManipulation(hexColor);
};
