import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../app.state';
import { ComicsReducer } from './comics.reducer';

export const Reducers: ActionReducerMap<AppState> = {
  comics: ComicsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
