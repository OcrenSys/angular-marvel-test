import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CardComponent } from '../../../components/card/card.component';
import { getSrc } from '../../../shared/helpers/placeholders.helper';
import { CardItem } from '../../../shared/interfaces/card.item';
import { TComic } from '../../../shared/types/comic.type';
import { GetComicsAction } from '../../../state/actions/comics.action';
import {
	ComicsSelector,
	LoadingSelector
} from '../../../state/selectors/comics.selector';

@Component({
	selector: 'app-comics-list',
	standalone: true,
	imports: [CommonModule, MatProgressSpinnerModule, CardComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class ComicsListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected comics$: Observable<TComic[]> = this._store.select(ComicsSelector);
	protected loading$: Observable<boolean> = this._store.select(LoadingSelector);

	ngOnInit(): void {
		this._store.dispatch(GetComicsAction());
	}
	protected getItem(_event: TComic): CardItem {
		return {
			title: _event.title,
			subTitle: _event.description,
			src: getSrc(_event.thumbnail)
		};
	}
}
