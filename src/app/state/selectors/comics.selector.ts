import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ComicState } from '../../shared/interfaces/comic.state';

export const comicSelected = (state: AppState) => state.comics;

export const ComicsSelector = createSelector(
	comicSelected,
	(state: ComicState) => state.comics
);

export const LoadingSelector = createSelector(
	comicSelected,
	(state: ComicState) => state.loading
);
