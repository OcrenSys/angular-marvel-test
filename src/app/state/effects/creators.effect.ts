import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { CreatorService } from '../../services/creators/creator.service';
import { TRootObject } from '../../shared/types/root.type';
import { CreatorsAction } from '../actions/creators.action';

@Injectable()
export class CreatorsEffect {
	private readonly _action$ = inject(Actions);
	private readonly _creatorService = inject(CreatorService);

	getCreatorsEffect$ = createEffect(() =>
		this._action$.pipe(
			ofType(CreatorsAction.GET_CREATORS),
			mergeMap(() =>
				this._creatorService._get().pipe(
					map((root: unknown) => {
						const {
							data: { results }
						} = root as TRootObject;
						return {
							type: CreatorsAction.STORE_CREATORS,
							creators: results
						};
					}),
					catchError(() => EMPTY)
				)
			)
		)
	);
}
