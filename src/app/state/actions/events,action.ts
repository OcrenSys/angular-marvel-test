import { createAction, props } from '@ngrx/store';

import { TEvent } from '../../shared/types/event.type';

export const EventsAction = {
	GET_EVENTS: '[Get Events] Get events from API',
	STORE_EVENTS: '[Store Events] Store events inside the state',
	GET_EVENT_BY_ID: '[Get Event By Id] Get event details from API'
};

export const GetEventsAction = createAction(EventsAction.GET_EVENTS);

export const StoreEventsAction = createAction(
	EventsAction.STORE_EVENTS,
	props<{ events: TEvent[] }>()
);

export const GetEventByIdAction = createAction(
	EventsAction.GET_EVENT_BY_ID,
	props<{ id: number }>()
);
