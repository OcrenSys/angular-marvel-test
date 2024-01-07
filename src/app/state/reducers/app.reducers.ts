import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AppState } from '../app.state';
import { CharacterReducer } from './characters.reducer';
import { ComicsReducer } from './comics.reducer';
import { CreatorReducer } from './creators.reducer';
import { EventsReducer } from './events.reducer';
import { StoryReducer } from './stories.reducer';

export const AppReducers: ActionReducerMap<AppState> = {
	comics: ComicsReducer,
	characters: CharacterReducer,
	stories: StoryReducer,
	events: EventsReducer,
	creators: CreatorReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
