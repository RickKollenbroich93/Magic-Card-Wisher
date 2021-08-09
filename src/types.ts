//---Type i want to use
export type Card = {
  name: string; //cardName
  imageUrl: string; //Imglink
  cmc: number; //ManaCosts
  color: string[]; //ColorOfCard
  rarity: string;
  set: string;
  originalType: string;
};

export type allCard = {
  cards: [
    {
      name: string;
      names: string[];
      manaCost: string;
      cmc: number;
      colors: [];
      colorIdentity: [];
      type: string;
      supertypes: string[];
      types: string[];
      subtypes: string[];
      rarity: string;
      set: string;
      text: string;
      artist: string;
      number: string;
      power: number;
      toughness: number;
      layout: string;
      multiverseid: number;
      imageUrl: string;
      rulings: [
        {
          date: string;
          text: string;
        }
      ];
      foreignNames: [
        {
          name: string;
          language: string;
          multiverseid: number;
        }
      ];
      printings: string[];
      originalText: string;
      originalType: string;
      id: string;
    }
  ];
};
