import './style.css';
import { createElement } from './utils/createElement';
import { magicCard } from './components/card/magicCard';
import { getCard } from './utils/api';
import { parseJSONFromLocalStorage } from './utils/localStorage';
import { Card } from './types';
import styles from './components/card/magicCard.module.css';

//--------------- Give the sorted Api data into my Function ---------------

async function run() {
  const cards = await getCard();

  const cardContainer = createElement('div', {
    className: 'mainWrapper',
    childElements: cards.map((cards) => magicCard(cards)),
  });
  const icon1 = '🔎';
  // const icon2 = '🔝';
  // const iconText = 'Search';
  const app = document.querySelector<HTMLDivElement>('#app');
  const upButton = createElement('div', {
    innerHTML: '<a href="#up"><span>' + icon1 + '</span></a>',
    className: 'scrollUp',
  });

  const searchbar = createElement('input', {
    placeholder: 'Search for Card',
    className: 'searchbar',

    oninput: async () => {
      cardContainer.innerHTML = '';
      const search = searchbar.value;
      const filteredCards = await getCard(search);
      const filteredCardElements = filteredCards.map((filteredCard) =>
        magicCard(filteredCard)
      );
      cardContainer.append(...filteredCardElements);
    },
  });
  const deleteYourCardsbtn = createElement('button', {
    innerText: 'Delete Cardlist',
    className: styles.glowOnHover,
  });
  deleteYourCardsbtn.onclick = () => deleteYourCards();
  function deleteYourCards() {
    localStorage.clear();
  }

  const yourCardsbtn = createElement('button', {
    innerText: 'Your Cards',
    className: styles.glowOnHover,
  });
  yourCardsbtn.onclick = () => showYourCards();

  function showYourCards() {
    cardContainer.innerHTML = '';
    const yourCards: Card[] = parseJSONFromLocalStorage('cards', []);

    const yourCardsList = yourCards.map((card) => magicCard(card));

    cardContainer.append(...yourCardsList);
  }

  const mainElement = createElement('main', {
    childElements: [
      createElement('img', {
        src: './src/assets/magic.svg',
        alt: '',
        className: 'headerimg',
      }),
      createElement('h1', {
        innerHTML: 'Card Whisher',
        id: 'up',
      }),

      searchbar,

      createElement('div', {
        className: 'buttenWrapper',
        childElements: [yourCardsbtn, deleteYourCardsbtn],
      }),

      createElement('h2', { innerText: 'Cards: ' }),

      cardContainer,

      upButton,
    ],
  });

  if (app !== null) {
    app.append(mainElement);
  }
}
run();
