import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { ComicService } from '../../services/comics/comic.service';
import { TRootObject } from '../../shared/types/root.type';
import { ComicsAction } from '../actions/comics.action';

@Injectable()
export class ComicsEffect {
	private readonly _action$ = inject(Actions);
	private readonly _comicService = inject(ComicService);

	getComicsEffect$ = createEffect(() =>
		this._action$.pipe(
			ofType(ComicsAction.GET_COMIC),
			mergeMap(() =>
				this._comicService._get().pipe(
					map((root: unknown) => {
						const {
							data: { results }
						} = root as TRootObject;
						return {
							type: ComicsAction.STORE_COMIC,
							comics: results
						};
					}),
					catchError(() => EMPTY)
				)
			)
		)
	);
}
