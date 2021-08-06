import './style.css';
import { createElement } from './utils/createElement';
import { magicCard } from './components/card/magicCard';
import { getCard } from './utils/api';

//--------------- Give the sorted Api data into my Function ---------------

const cards = await getCard();

const cardContainer = createElement('div', {
  className: 'mainWrapper',
  childElements: cards.map((cards) => magicCard(cards)),
});

const app = document.querySelector<HTMLDivElement>('#app');

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

const mainElement = createElement('main', {
  childElements: [
    createElement('img', {
      src: './src/assets/magic.svg',
      alt: '',
      className: 'headerimg',
    }),
    createElement('h1', {
      innerHTML: 'Card Whisher',
    }),

    searchbar,

    createElement('h2', { innerText: 'Cards' }),

    cardContainer,
  ],
});

if (app !== null) {
  app.append(mainElement);
}
