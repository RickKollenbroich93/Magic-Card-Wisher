//--------------- Import ---------------

import styles from './magicCard.module.css';
import type { Card } from '../../types';
import { createElement } from '../../utils/createElement';

//--------------- Create an characterCard with the right typ ---------------

export function magicCard({
  name,
  imageUrl,
  cmc,
  rarity,
  set,
  color,
  originalType,
}: Card): HTMLElement {
  const character = createElement('div', {
    className: styles.cardWrapper,
    childElements: [
      createElement('img', {
        className: styles.cardImgSize,
        src: `${
          imageUrl === undefined ? './src/assets/cardback.jpeg' : imageUrl
        } `,
      }),
      createElement('div', {
        className: styles.textWrapper,
        childElements: [
          createElement('h3', {
            className: styles.cardHeader,
            innerText: name,
          }),
          createElement('p', {
            innerText: 'Color: ' + color,
          }),
          createElement('p', {
            innerText: 'Manacosts: ' + cmc,
          }),
          createElement('p', {
            innerText: 'Type: ' + originalType,
          }),
          createElement('p', {
            innerText: 'Rarity: ' + rarity,
          }),
          createElement('p', {
            innerText: 'Set: ' + set,
          }),
          createElement('button', {
            innerText: 'ADD Card',
            className: styles.glowOnHover,
          }),
        ],
      }),
    ],
  });

  return character;
}
