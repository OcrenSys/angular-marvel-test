import { createReducer, on } from '@ngrx/store';

import { ComicState } from '../../shared/interfaces/comic.state';
import { TComic } from '../../shared/types/comic.type';
import * as ComicsActions from '../actions/comics.action';

const initialState: ComicState = {
	results: [],
	loading: false,
	count: 12,
	limit: 12,
	offset: 0,
	total: 100
};

export const ComicsReducer = createReducer<ComicState>(
	initialState,
	on(ComicsActions.GetComicsAction, (state, { params }) => ({
		...state,
		...params,
		loading: true
	})),
	on(
		ComicsActions.StoreComicsAction,
		(state, { data: { results, ..._data } }) => ({
			...state,
			..._data,
			loading: false,
			results: results as TComic[]
		})
	)
);
