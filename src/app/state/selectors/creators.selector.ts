import { createSelector } from '@ngrx/store';

import { CreatorState } from '../../shared/interfaces/creator.state';
import { TCreator } from '../../shared/types/creator.type';
import { AppState } from '../app.state';

const creatorSelected = (state: AppState): CreatorState => state.creators;

export const CreatorSelector = createSelector<
	AppState,
	CreatorState,
	TCreator[]
>(creatorSelected, (state: CreatorState): TCreator[] => state.creators);

export const LoadingSelector = createSelector<AppState, CreatorState, boolean>(
	creatorSelected,
	(state: CreatorState): boolean => state.loading
);
