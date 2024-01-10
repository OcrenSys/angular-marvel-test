import { createAction, props } from '@ngrx/store';

import { Params } from '../../shared/interfaces/params';
import { TData } from '../../shared/types/data.type';

export const EventsAction = {
	GET_EVENTS: '[Get Events] Get events from API',
	STORE_EVENTS: '[Store Events] Store events inside the state',
	GET_EVENT_BY_ID: '[Get Event By Id] Get event details from API'
};

export const GetEventsAction = createAction(
	EventsAction.GET_EVENTS,
	props<{ params: Params }>()
);

export const StoreEventsAction = createAction(
	EventsAction.STORE_EVENTS,
	props<{ data: TData }>()
);

export const GetEventByIdAction = createAction(
	EventsAction.GET_EVENT_BY_ID,
	props<{ id: number }>()
);
