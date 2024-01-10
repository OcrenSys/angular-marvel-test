import { createSelector } from '@ngrx/store';

import { EventState } from '../../shared/interfaces/event.state';
import { AppState } from '../app.state';

const eventSelected = (state: AppState): EventState => state.events;

export const EventSelector = createSelector<AppState, EventState, EventState>(
	eventSelected,
	(state: EventState): EventState => state
);

export const LoadingSelector = createSelector<AppState, EventState, boolean>(
	eventSelected,
	(state: EventState): boolean => state.loading || false
);
