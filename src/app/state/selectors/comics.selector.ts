import { createSelector } from '@ngrx/store';

import { ComicState } from '../../shared/interfaces/comic.state';
import { AppState } from '../app.state';

export const comicSelected = (state: AppState): ComicState => state.comics;

export const ComicsSelector = createSelector(
	comicSelected,
	(state: ComicState): ComicState => state
);

export const LoadingSelector = createSelector<AppState, ComicState, boolean>(
	comicSelected,
	(state: ComicState) => state.loading || false
);
