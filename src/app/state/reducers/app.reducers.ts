import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../app.state';
import { ComicsReducer } from './comics.reducer';
import { CharacterReducer } from './characters.reducer';

export const AppReducers: ActionReducerMap<AppState> = {
	comics: ComicsReducer,
	characters: CharacterReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
