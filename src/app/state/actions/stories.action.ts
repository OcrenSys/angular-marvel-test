import { Params } from '@angular/router';
import { createAction, props } from '@ngrx/store';

import { TData } from '../../shared/types/data.type';

export const StoriesAction = {
	GET_STORIES: '[Get Stories] Get stories from API',
	STORE_STORIES: '[Store Stories] Store stories inside the state',
	GET_STORY_BY_ID: '[Get Story By Id] Get story details from API'
};

export const GetStoriesAction = createAction(
	StoriesAction.GET_STORIES,
	props<{ params: Params }>()
);

export const StoreStoriesAction = createAction(
	StoriesAction.STORE_STORIES,
	props<{ data: TData }>()
);

export const GetStoryByIdAction = createAction(
	StoriesAction.GET_STORY_BY_ID,
	props<{ id: number }>()
);
