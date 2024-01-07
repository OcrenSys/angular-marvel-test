import { createAction, props } from '@ngrx/store';

import { TStory } from '../../shared/types/story.type';

export const StoriesAction = {
	GET_STORIES: '[Get Stories] Get stories from API',
	STORE_STORIES: '[Store Stories] Store stories inside the state',
	GET_STORY_BY_ID: '[Get Story By Id] Get story details from API'
};

export const GetStoriesAction = createAction(StoriesAction.GET_STORIES);

export const StoreStoriesAction = createAction(
	StoriesAction.STORE_STORIES,
	props<{ stories: TStory[] }>()
);

export const GetStoryByIdAction = createAction(
	StoriesAction.GET_STORY_BY_ID,
	props<{ id: number }>()
);
