import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '../../shared/interfaces/character.state';
import * as CharacterAction from '../actions/characters.action';

const initialState: CharacterState = {
	characters: [],
	loading: false
};

export const CharacterReducer = createReducer<CharacterState>(
	initialState,
	on(CharacterAction.GetCharactersAction, (state) => ({
		...state,
		loading: true
	})),
	on(CharacterAction.StoreCharacterAction, (state, { characters }) => ({
		...state,
		characters,
		loading: false
	}))
);
