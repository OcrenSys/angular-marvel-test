import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CardComponent } from '../../../components/card/card.component';
import { getSrc } from '../../../shared/helpers/placeholders.helper';
import { CardItem } from '../../../shared/interfaces/card.item';
import { TEvent } from '../../../shared/types/event.type';
import { GetEventsAction } from '../../../state/actions/events,action';
import {
	EventSelector,
	LoadingSelector
} from '../../../state/selectors/events.selector';

@Component({
	selector: 'app-events-list',
	standalone: true,
	imports: [CommonModule, MatProgressSpinnerModule, CardComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class EventsListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected events$: Observable<TEvent[]> = this._store.select(EventSelector);
	protected loading$: Observable<boolean> = this._store.select(LoadingSelector);

	ngOnInit(): void {
		this._store.dispatch(GetEventsAction());
	}
	protected getItem(_event: TEvent): CardItem {
		console.log(_event);
		return {
			title: _event.title,
			subTitle: _event.description,
			src: getSrc(_event.thumbnail)
		};
	}
}
