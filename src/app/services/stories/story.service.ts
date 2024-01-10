import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

import { Routes } from '../../shared/routes/route';
import { BaseService } from '../base.service';

@Injectable({
	providedIn: 'root'
})
export class StoryService extends BaseService {
	protected readonly _httpClient: HttpClient = inject(HttpClient);

	constructor() {
		super(Routes.stories.list());
	}

	_get<R>(params: Params): Observable<R> {
		let _httpParams = new HttpParams();
		Object.entries(params).map(([key, value]) => {
			_httpParams = _httpParams.set(key, value);
		});
		return this._httpClient.get<R>(this.Url(), { params: _httpParams });
	}

	_getById<T>(id: string): Observable<T> {
		return this._httpClient.get<T>(this.Url(Routes.stories.details(id)));
	}
}
