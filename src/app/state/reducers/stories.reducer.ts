import { createReducer, on } from '@ngrx/store';

import { StoryState } from '../../shared/interfaces/story.state';
import {
	GetStoriesAction,
	StoreStoriesAction
} from '../actions/stories.action';

const initialState: StoryState = {
	stories: [],
	loading: false
};

export const StoryReducer = createReducer<StoryState>(
	initialState,
	on(GetStoriesAction, (state) => ({
		...state,
		loading: true
	})),
	on(StoreStoriesAction, (state, { stories }) => ({
		...state,
		stories,
		loading: false
	}))
);
