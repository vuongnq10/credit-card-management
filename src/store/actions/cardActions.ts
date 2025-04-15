import { get } from 'services/requests';
import type { AppDispatch, AppThunkAction } from 'store/hooks';
import { CardHolder } from 'types/card';

import { SET_LOADING, SET_CARD_ITEMS, CardActionTypes } from 'store/reducers/cards';

export const setLoading = (loading: boolean): CardActionTypes => ({
  type: SET_LOADING,
  payload: loading,
});

export const setCard = (items: CardHolder[]): CardActionTypes => ({
  type: SET_CARD_ITEMS,
  payload: items,
});

// Async action creator example
export const getCards = (): AppThunkAction =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const data = await get('/api/card') as CardHolder[];

      dispatch(setCard(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
