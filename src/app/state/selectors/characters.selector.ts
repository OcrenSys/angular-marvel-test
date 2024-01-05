import { createSelector } from '@ngrx/store';

import { CharacterState } from '../../shared/interfaces/character.state';
import { TCharacters } from '../../shared/types/character.type';
import { AppState } from '../app.state';

const characterSelected = (state: AppState): CharacterState => state.characters;

export const CharacterSelector = createSelector<
	AppState,
	CharacterState,
	TCharacters[]
>(
	characterSelected,
	(state: CharacterState): TCharacters[] => state.characters
);

export const LoadingSelector = createSelector<
	AppState,
	CharacterState,
	boolean
>(characterSelected, (state: CharacterState): boolean => state.loading);
