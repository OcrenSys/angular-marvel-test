import { Injectable, inject } from '@angular/core';
import { ComicService } from '../../services/comics/comic.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ComicsAction } from '../actions/comics.action';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { TComic } from '../../shared/types/comic.type';

@Injectable()
export class ComicsEffect {
	private readonly _action$ = inject(Actions);
	private readonly _comicService = inject(ComicService);

	getComicsEffect$ = createEffect(() =>
		this._action$.pipe(
			ofType(ComicsAction.GET_COMIC),
			mergeMap(() =>
				this._comicService._get().pipe(
					map(({ data: { results } }: any) => results),
					map((comics: TComic[]) => ({
						type: ComicsAction.STORE_COMIC,
						comics
					})),
					catchError(() => EMPTY)
				)
			)
		)
	);
}
