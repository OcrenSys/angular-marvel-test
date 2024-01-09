import { CommonModule } from '@angular/common';
import {
	Component,
	computed,
	inject,
	OnInit,
	Signal,
	signal
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CardComponent } from '../../../components/card/card.component';
import { getSrc } from '../../../shared/helpers/placeholders.helper';
import { CardItem } from '../../../shared/interfaces/card.item';
import { ComicState } from '../../../shared/interfaces/comic.state';
import { Params } from '../../../shared/interfaces/params';
import { TComic } from '../../../shared/types/comic.type';
import { GetComicsAction } from '../../../state/actions/comics.action';
import {
	ComicsSelector,
	LoadingSelector
} from '../../../state/selectors/comics.selector';

@Component({
	selector: 'app-comics-list',
	standalone: true,
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		CardComponent,
		MatFormFieldModule,
		MatInputModule,
		MatSlideToggleModule,
		MatPaginatorModule
	],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class ComicsListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected data: Signal<ComicState> = this._store.selectSignal(ComicsSelector);
	protected loading$: Observable<unknown> = this._store.select(LoadingSelector);

	protected pageSize = signal<number>(12);
	protected pageIndex = signal<number>(0);
	protected pageLength: Signal<number> = computed<number>(
		() => this.data().total
	);
	protected pageConfig = {
		hidePageSize: false,
		showPageSizeOptions: true,
		showFirstLastButtons: true,
		disabled: false,
		pageSizeOptions: [6, 12, 24]
	};
	private params: Signal<Params> = computed<Params>(() => ({
		limit: this.pageSize(),
		offset: this.pageIndex() * this.pageSize()
	}));

	protected handlePageEvent($event: PageEvent) {
		this.pageIndex.update(() => $event.pageIndex);
		this.pageSize.update(() => $event.pageSize);

		this._store.dispatch(GetComicsAction({ params: this.params() }));
	}

	protected getItem(_event: TComic): CardItem {
		return {
			title: _event.title,
			subTitle: _event.description,
			src: getSrc(_event.thumbnail)
		};
	}

	ngOnInit(): void {
		this._store.dispatch(
			GetComicsAction({
				params: this.params()
			})
		);
	}
}
