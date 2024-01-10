import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Params } from '../../shared/interfaces/params';
import { Routes } from '../../shared/routes/route';
import { BaseService } from '../base.service';

@Injectable({
	providedIn: 'root'
})
export class CharacterService extends BaseService {
	protected readonly _httpClient: HttpClient = inject(HttpClient);

	constructor() {
		super(Routes.characters.list());
	}

	_get<R>(params: Params): Observable<R> {
		let _httParams = new HttpParams();

		Object.entries(params).forEach(([key, value]) => {
			_httParams = _httParams.set(key, value);
		});
		return this._httpClient.get<R>(this.Url(), { params: _httParams });
	}
}
