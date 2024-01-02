import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterAction } from '../actions/characters.action';
import { CharacterService } from '../../services/character/character.service';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { TCharacters } from '../../shared/types/character.type';

@Injectable()
export class CharacterEffect {
  private readonly _action$ = inject(Actions);
  private readonly _characterService = inject(CharacterService);

  getCharacterEffect$ = createEffect(() =>
    this._action$.pipe(
      ofType(CharacterAction.GET_CHARACTERS),
      mergeMap(() =>
        this._characterService._get().pipe(
          map(({ data: { results } }: any) => results),
          map((characters: TCharacters[]) => ({
            type: CharacterAction.STORE_CHARACTERS,
            characters,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
