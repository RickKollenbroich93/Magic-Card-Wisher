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

    createElement('h2', { innerText: 'Cards: ' }),

    cardContainer,

    upButton,
  ],
});

if (app !== null) {
  app.append(mainElement);
}
