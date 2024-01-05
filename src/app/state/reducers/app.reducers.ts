import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AppState } from '../app.state';
import { CharacterReducer } from './characters.reducer';
import { ComicsReducer } from './comics.reducer';

export const AppReducers: ActionReducerMap<AppState> = {
	comics: ComicsReducer,
	characters: CharacterReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
