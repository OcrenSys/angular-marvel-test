import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

	_get<R>(): Observable<R> {
		return this._httpClient.get<R>(this.Url());
	}
}
