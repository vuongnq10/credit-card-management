import { CardHolder } from 'types/card';

export const SET_LOADING = 'SET_LOADING';
export const SET_CARD_ITEMS = 'SET_CARD_ITEMS';

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}


interface SetCardAction {
  type: typeof SET_CARD_ITEMS;
  payload: CardHolder[];
}

export type CardActionTypes = SetLoadingAction | SetCardAction;

interface CardState {
  loading: boolean;
  records: number;
  page: number;
  cards: CardHolder[];
}

const initialState: CardState = {
  loading: false,
  records: 2,
  page: 1,
  cards: [],
};

const cardReducer = (state = initialState, action: CardActionTypes): CardState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CARD_ITEMS:
      return {
        ...state,
        page: state.page + 1,
        cards: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
