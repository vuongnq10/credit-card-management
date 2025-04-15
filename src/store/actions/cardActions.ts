import { get } from 'services/requests';
import type { AppDispatch, AppThunkAction } from 'store/hooks';
import { CardHolder } from 'types/card';

import { SET_CARD_ITEMS, SET_CURRENT_CARD, CardActionTypes } from 'store/reducers/cards';

export const setCards = (items: CardHolder[]): CardActionTypes => ({
  type: SET_CARD_ITEMS,
  payload: items,
});

export const setCard = (index: number): CardActionTypes => ({
  type: SET_CURRENT_CARD,
  payload: index,
});

// Async action creator example
export const getCards = (): AppThunkAction =>
  async (dispatch: AppDispatch, getState) => {
    const { records, page } = getState().cards;
    const data = await get('/api/card', { params: { records, page } }) as CardHolder[];

    dispatch(setCards(data));
  };
