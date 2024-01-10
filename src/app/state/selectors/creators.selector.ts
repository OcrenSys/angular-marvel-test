import { createSelector } from '@ngrx/store';

import { CreatorState } from '../../shared/interfaces/creator.state';
import { AppState } from '../app.state';

const creatorSelected = (state: AppState): CreatorState => state.creators;

export const CreatorSelector = createSelector<
	AppState,
	CreatorState,
	CreatorState
>(creatorSelected, (state: CreatorState): CreatorState => state);

export const LoadingSelector = createSelector<AppState, CreatorState, boolean>(
	creatorSelected,
	(state: CreatorState): boolean => state.loading || false
);
