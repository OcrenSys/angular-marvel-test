import { createReducer, on } from '@ngrx/store';

import { StoryState } from '../../shared/interfaces/story.state';
import { TStory } from '../../shared/types/story.type';
import {
	GetStoriesAction,
	StoreStoriesAction
} from '../actions/stories.action';

const initialState: StoryState = {
	results: [],
	loading: false,
	count: 12,
	limit: 12,
	offset: 0,
	total: 100
};

export const StoryReducer = createReducer<StoryState>(
	initialState,
	on(GetStoriesAction, (state) => ({
		...state,
		loading: true
	})),
	on(StoreStoriesAction, (state, { data: { results, ..._data } }) => ({
		...state,
		..._data,
		loading: false,
		results: results as TStory[]
	}))
);
