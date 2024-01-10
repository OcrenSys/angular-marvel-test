import { Params } from '@angular/router';
import { createAction, props } from '@ngrx/store';

import { TData } from '../../shared/types/data.type';

export const CharacterAction = {
	GET_CHARACTERS: '[Get Characters] Get character list from API',
	STORE_CHARACTERS: '[Store Charatcers] Store character list',
	GET_CHARATCER_BY_ID: '[Get Character By Id] Get character details from API'
};

export const GetCharactersAction = createAction(
	CharacterAction.GET_CHARACTERS,
	props<{ params: Params }>()
);

export const StoreCharacterAction = createAction(
	CharacterAction.STORE_CHARACTERS,
	props<{ data: TData }>()
);

export const GetCharacterById = createAction(
	CharacterAction.GET_CHARATCER_BY_ID,
	props<{ id: number }>()
);
