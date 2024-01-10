import { createSelector } from '@ngrx/store';

import { StoryState } from '../../shared/interfaces/story.state';
import { AppState } from '../app.state';

const storySelected = (state: AppState): StoryState => state.stories;

export const StorySelector = createSelector<AppState, StoryState, StoryState>(
	storySelected,
	(state: StoryState): StoryState => state
);

export const LoadingSelector = createSelector<AppState, StoryState, boolean>(
	storySelected,
	(state: StoryState): boolean => state.loading || false
);
