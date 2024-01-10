import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { CharacterService } from '../../services/character/character.service';
import { TRootObject } from '../../shared/types/root.type';
import { CharacterAction } from '../actions/characters.action';

@Injectable()
export class CharacterEffect {
	private readonly _action$ = inject(Actions);
	private readonly _characterService = inject(CharacterService);

	getCharacterEffect$ = createEffect(() =>
		this._action$.pipe(
			ofType(CharacterAction.GET_CHARACTERS),
			mergeMap((response) =>
				this._characterService._get({ ...response.params }).pipe(
					map((root: unknown) => {
						const { data } = root as TRootObject;
						return {
							type: CharacterAction.STORE_CHARACTERS,
							data: data
						};
					}),
					catchError(() => EMPTY)
				)
			)
		)
	);
}
