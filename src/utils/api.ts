//--------------- Import ---------------

import type { Card, allCard } from '../types';

//--------------- Using an API ---------------

export async function getCard(name?: string): Promise<Card[]> {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards/?name=${name ? name : ''}`
  );
  const data: allCard = await response.json();
  const cards = data.cards; //-----What we want from json
  console.log(cards);

  //--------------- We only want to get what we need ---------------

  const formattCards: Card[] = cards.map((card) => {
    const formattCard: Card = {
      name: card.name,
      imageUrl: card.imageUrl,
      cmc: card.cmc,
      rarity: card.rarity,
      set: card.set,
      color: card.colors,
      originalType: card.originalType,
    };
    return formattCard;
  });
  return formattCards;
}
