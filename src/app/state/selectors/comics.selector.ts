import { createSelector } from '@ngrx/store';

import { ComicState } from '../../shared/interfaces/comic.state';
import { TComic } from '../../shared/types/comic.type';
import { AppState } from '../app.state';

export const comicSelected = (state: AppState): ComicState => state.comics;

export const ComicsSelector = createSelector<AppState, ComicState, TComic[]>(
	comicSelected,
	(state: ComicState) => state.comics
);

export const LoadingSelector = createSelector<AppState, ComicState, boolean>(
	comicSelected,
	(state: ComicState) => state.loading
);
