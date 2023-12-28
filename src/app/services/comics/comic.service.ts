import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { TComic } from '../../shared/types/comic.type';
import { Routes } from '../../shared/routes/route';

@Injectable({
  providedIn: 'root',
})
export class ComicService extends BaseService<TComic> {
  protected readonly _httpClient: HttpClient = inject(HttpClient);
  
  constructor() {
    super(Routes.comics());
  }

  _get<R>(): Observable<R> {
    return this._httpClient.get<R>(this.Url());
  }

  _getById<T, R>(id: string): Observable<R> {
    return this._httpClient.get<R>(this.Url(Routes.comicsById(id)));
  }
}
