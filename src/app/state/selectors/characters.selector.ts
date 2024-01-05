import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CharacterState } from '../../shared/interfaces/character.state';

const characterSelected = (state: AppState) => state.characters;

export const CharacterSelector = createSelector(
	characterSelected,
	(state: CharacterState) => state.characters
);

export const LoadingSelector = createSelector(
	characterSelected,
	(state: CharacterState) => state.loading
);
