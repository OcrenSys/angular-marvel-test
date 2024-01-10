import { createReducer, on } from '@ngrx/store';

import { CreatorState } from '../../shared/interfaces/creator.state';
import { TCreator } from '../../shared/types/creator.type';
import {
	GetCreatorsAction,
	StoreCreatorsAction
} from '../actions/creators.action';

const initialState: CreatorState = {
	results: [],
	loading: false,
	count: 12,
	limit: 12,
	offset: 0,
	total: 100
};

export const CreatorReducer = createReducer<CreatorState>(
	initialState,
	on(GetCreatorsAction, (state) => ({
		...state,
		loading: true
	})),
	on(StoreCreatorsAction, (state, { data: { results, ..._data } }) => ({
		...state,
		..._data,
		loading: false,
		results: results as TCreator[]
	}))
);
