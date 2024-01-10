import { createReducer, on } from '@ngrx/store';

import { CharacterState } from '../../shared/interfaces/character.state';
import { TCharacters } from '../../shared/types/character.type';
import * as CharacterAction from '../actions/characters.action';

const initialState: CharacterState = {
	loading: false,
	count: 0,
	limit: 0,
	offset: 0,
	total: 0,
	results: []
};

export const CharacterReducer = createReducer<CharacterState>(
	initialState,
	on(CharacterAction.GetCharactersAction, (state) => ({
		...state,
		loading: true
	})),
	on(
		CharacterAction.StoreCharacterAction,
		(state, { data: { results, ..._data } }) => ({
			...state,
			..._data,
			results: results as TCharacters[],
			loading: false
		})
	)
);
