import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

import { ComicService } from '../../services/comics/comic.service';
import { TRootObject } from '../../shared/types/root.type';
import { ComicsAction } from '../actions/comics.action';

@Injectable()
export class ComicsEffect {
	private readonly _action$ = inject(Actions);
	private readonly _comicService = inject(ComicService);

	getComicsEffect$ = createEffect(() =>
		this._action$.pipe(
			ofType(ComicsAction.GET_COMICS),
			exhaustMap((response) => {
				return this._comicService._get({ ...response.params }).pipe(
					map((root: unknown) => {
						const { data } = root as TRootObject;
						return {
							type: ComicsAction.STORE_COMICS,
							data: data
						};
					}),
					catchError(() => EMPTY)
				);
			})
		)
	);
}
