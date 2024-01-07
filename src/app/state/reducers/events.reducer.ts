import { createReducer, on } from '@ngrx/store';

import { EventState } from '../../shared/interfaces/event.state';
import { GetEventsAction, StoreEventsAction } from '../actions/events,action';

const initialState: EventState = {
	events: [],
	loading: false
};

export const EventsReducer = createReducer<EventState>(
	initialState,
	on(GetEventsAction, (state) => ({
		...state,
		loading: true
	})),
	on(StoreEventsAction, (state, { events }) => ({
		...state,
		events,
		loading: false
	}))
);
