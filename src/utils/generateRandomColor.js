import { data } from '../data/data.js';

export const generateRandomColor = () => {
  let color = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * data.character.length);
    color += data.character[randomIndex];
  }
  return color;
};
