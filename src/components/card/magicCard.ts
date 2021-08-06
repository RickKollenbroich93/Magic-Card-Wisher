//--------------- Import ---------------

import styles from './magicCard.module.css';
import type { card } from '../../types';
import { createElement } from '../../utils/createElement';

//--------------- Create an characterCard with the right typ ---------------

export function magicCard({
  name,
  imageUrl,
  cmc,
  color,
  rarity,
  set,
}: card): HTMLElement {
  const character = createElement('div', {
    className: styles.cardWrapper,
    childElements: [
      createElement('img', {
        src: imageUrl,
        className: styles.characterImg,
      }),
      createElement('div', {
        className: styles.textWrapper,
        childElements: [
          createElement('h3', { innerText: name }),
          createElement('p', {
            innerText: 'Manacosts' + cmc,
          }),
          createElement('p', {
            innerText: 'Color: ' + color,
          }),
          createElement('p', {
            innerText: 'Rarity: ' + rarity,
          }),
          createElement('p', {
            innerText: 'Set: ' + set,
          }),
        ],
      }),
    ],
  });

  return character;
}
