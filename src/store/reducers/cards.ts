import type { CardHolder } from 'types/card';
import { cards } from 'app/api/card/mockData';

export const SET_CARD_ITEMS = 'SET_CARD_ITEMS';
export const SET_CURRENT_CARD = 'SET_CURRENT_CARD';
export const SET_FREEZE_CARD = 'SET_FREEZE_CARD';

export type CardActionTypes = {
  type: string,
  payload: CardHolder[] | number | boolean | string,
};

interface CardState {
  records: number;
  page: number;
  cards: CardHolder[];
  currentCard: CardHolder;
}

const initialState: CardState = {
  records: 2,
  page: 2,
  cards: cards.slice(0, 2) as CardHolder[],
  currentCard: cards[0] as CardHolder,
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
        currentCard: cards[action.payload as number] as CardHolder,
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
    default:
      return state;
  }
};

export default cardReducer;
