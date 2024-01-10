import { createReducer, on } from '@ngrx/store';

import { EventState } from '../../shared/interfaces/event.state';
import { TEvent } from '../../shared/types/event.type';
import { GetEventsAction, StoreEventsAction } from '../actions/events.action';

const initialState: EventState = {
	results: [],
	loading: false,
	count: 12,
	limit: 12,
	offset: 0,
	total: 100
};

export const EventsReducer = createReducer<EventState>(
	initialState,
	on(GetEventsAction, (state) => ({
		...state,
		loading: true
	})),
	on(StoreEventsAction, (state, { data: { results, ..._data } }) => ({
		...state,
		..._data,
		loading: false,
		results: results as TEvent[]
	}))
);
