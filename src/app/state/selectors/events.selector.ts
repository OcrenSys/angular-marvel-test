import { createSelector } from '@ngrx/store';

import { EventState } from '../../shared/interfaces/event.state';
import { TEvent } from '../../shared/types/event.type';
import { AppState } from '../app.state';

const eventSelected = (state: AppState): EventState => state.events;

export const EventSelector = createSelector<AppState, EventState, TEvent[]>(
	eventSelected,
	(state: EventState): TEvent[] => state.events
);

export const LoadingSelector = createSelector<AppState, EventState, boolean>(
	eventSelected,
	(state: EventState): boolean => state.loading
);
