import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import type { RootState } from './reducers';
import type { CardActionTypes } from './reducers/cards';

export type AppDispatch = ThunkDispatch<RootState, unknown, CardActionTypes>;
export type AppThunkAction = ThunkAction<Promise<void>, RootState, unknown, CardActionTypes>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
