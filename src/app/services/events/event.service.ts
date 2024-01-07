import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Routes } from '../../shared/routes/route';
import { BaseService } from '../base.service';

@Injectable({
	providedIn: 'root'
})
export class EventService extends BaseService {
	protected readonly _httpClient: HttpClient = inject(HttpClient);

	constructor() {
		super(Routes.events.list());
	}

	_get<R>(): Observable<R> {
		return this._httpClient.get<R>(this.Url());
	}

	_getById<T>(id: string): Observable<T> {
		return this._httpClient.get<T>(this.Url(Routes.events.details(id)));
	}
}