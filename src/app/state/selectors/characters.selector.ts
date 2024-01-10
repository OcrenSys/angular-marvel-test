import { createSelector } from '@ngrx/store';

import { CharacterState } from '../../shared/interfaces/character.state';
import { AppState } from '../app.state';

const characterSelected = (state: AppState): CharacterState => state.characters;

export const CharacterSelector = createSelector<
	AppState,
	CharacterState,
	CharacterState
>(characterSelected, (state: CharacterState): CharacterState => state);

export const LoadingSelector = createSelector<
	AppState,
	CharacterState,
	boolean
>(
	characterSelected,
	(state: CharacterState): boolean => state.loading || false
);
