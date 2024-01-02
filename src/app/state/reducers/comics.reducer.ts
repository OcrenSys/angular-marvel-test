import { createReducer, on } from '@ngrx/store';
import * as ComicsActions from '../actions/comics.action';
import { ComicState } from '../../shared/interfaces/comic.state';

const initialState: ComicState = {
  comics: [],
  loading: false,
};

export const ComicsReducer = createReducer<ComicState>(
  initialState,
  on(ComicsActions.GetComicsAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(ComicsActions.StoreComicsAction, (state, { comics }) => ({
    ...state,
    comics,
    loading: false,
  }))
);
