import { createSelector } from '@ngrx/store';

import { StoryState } from '../../shared/interfaces/story.state';
import { TStory } from '../../shared/types/story.type';
import { AppState } from '../app.state';

const storySelected = (state: AppState): StoryState => state.stories;

export const StorySelector = createSelector<AppState, StoryState, TStory[]>(
	storySelected,
	(state: StoryState): TStory[] => state.stories
);

export const LoadingSelector = createSelector<AppState, StoryState, boolean>(
	storySelected,
	(state: StoryState): boolean => state.loading
);
