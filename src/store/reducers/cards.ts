import type { CardHolder } from 'types/card';
import { cards as firstInit } from 'app/api/card/mockData';

export const SET_CARD_ITEMS = 'SET_CARD_ITEMS';
export const SET_CURRENT_CARD = 'SET_CURRENT_CARD';
export const SET_FREEZE_CARD = 'SET_FREEZE_CARD';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';

export type CardActionTypes = {
  type: string,
  payload: CardHolder[] | number | boolean | string,
};

interface CardState {
  records: number;
  page: number;
  slideIndex: number;
  cards: CardHolder[];
  currentCard: CardHolder;
}

const initialState: CardState = {
  records: 2,
  page: 2,
  slideIndex: 0,
  cards: firstInit.slice(0, 2) as CardHolder[],
  currentCard: firstInit[0] as CardHolder,
};

const cardReducer = (state = initialState, action: CardActionTypes): CardState => {
  switch (action.type) {
    case SET_CARD_ITEMS:
      return {
        ...state,
        page: state.page + 1,
        cards: [
          ...state.cards,
          ...(action.payload as CardHolder[]),
        ],
      };
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: state.cards[action.payload as number] as CardHolder,
        slideIndex: action.payload as number,
      };
    case SET_FREEZE_CARD:
      return {
        ...state,
        cards: state.cards.map((card: CardHolder) => ({ ...card, freezed: card.cardNumber === state.currentCard.cardNumber ? !state.currentCard.freezed : card.freezed })),
        currentCard: {
          ...state.currentCard,
          freezed: !state.currentCard.freezed,
        } as CardHolder,
      };

    case ADD_NEW_CARD: {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const years = ['2025', '2026', '2027', '2028'];
      const month = months[Math.floor(Math.random() * months.length)];
      const year = years[Math.floor(Math.random() * years.length)];

      const newCard = {
        name: action.payload,
        cardNumber: '2020 2020 2020 2020',
        expirationDate: `${month}/${year}`,
        cvc: `${(Math.floor(Math.random() * 9)).toFixed(0)}${(Math.floor(Math.random() * 9)).toFixed(0)}${(Math.floor(Math.random() * 9)).toFixed(0)} `,
        freezed: false,
        transactions: []
      } as CardHolder;

      return {
        ...state,
        cards: [
          ...state.cards,
          newCard,
        ],
        currentCard: newCard,
        slideIndex: state.cards.length as number,
      };
    }
    default:
      return state;
  }
};

export default cardReducer;
