import { createReducer, on } from '@ngrx/store';

import { CreatorState } from '../../shared/interfaces/creator.state';
import {
	GetCreatorsAction,
	StoreCreatorsAction
} from '../actions/creators.action';

const initialState: CreatorState = {
	creators: [],
	loading: false
};

export const CreatorReducer = createReducer<CreatorState>(
	initialState,
	on(GetCreatorsAction, (state) => ({
		...state,
		loading: true
	})),
	on(StoreCreatorsAction, (state, { creators }) => ({
		...state,
		creators,
		loading: false
	}))
);
