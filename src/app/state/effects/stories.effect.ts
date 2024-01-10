import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { StoryService } from '../../services/stories/story.service';
import { TRootObject } from '../../shared/types/root.type';
import { StoriesAction } from '../actions/stories.action';

@Injectable()
export class StoriesEffect {
	private readonly _action$ = inject(Actions);
	private readonly _storyService = inject(StoryService);

	getStoriesEffect$ = createEffect(() =>
		this._action$.pipe(
			ofType(StoriesAction.GET_STORIES),
			mergeMap((response) =>
				this._storyService._get({ ...response.params }).pipe(
					map((root: unknown) => {
						const { data } = root as TRootObject;
						return {
							type: StoriesAction.STORE_STORIES,
							data: data
						};
					}),
					catchError(() => EMPTY)
				)
			)
		)
	);
}
