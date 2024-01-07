import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { EventService } from '../../services/events/event.service';
import { TRootObject } from '../../shared/types/root.type';
import { EventsAction } from '../actions/events,action';

@Injectable()
export class EventsEffect {
	private readonly _action$ = inject(Actions);
	private readonly _eventService = inject(EventService);

	getEventsEffect$ = createEffect(() =>
		this._action$.pipe(
			ofType(EventsAction.GET_EVENTS),
			mergeMap(() =>
				this._eventService._get().pipe(
					map((root: unknown) => {
						const {
							data: { results }
						} = root as TRootObject;
						return {
							type: EventsAction.STORE_EVENTS,
							events: results
						};
					}),
					catchError(() => EMPTY)
				)
			)
		)
	);
}
