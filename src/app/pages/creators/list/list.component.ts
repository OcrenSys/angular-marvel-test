import { CommonModule } from '@angular/common';
import {
	Component,
	computed,
	inject,
	OnInit,
	Signal,
	signal
} from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CardComponent } from '../../../components/card/card.component';
import { getSrc } from '../../../shared/helpers/placeholders.helper';
import { CardItem } from '../../../shared/interfaces/card.item';
import { CreatorState } from '../../../shared/interfaces/creator.state';
import { TCreator } from '../../../shared/types/creator.type';
import { GetCreatorsAction } from '../../../state/actions/creators.action';
import { LoadingSelector } from '../../../state/selectors/creators.selector';
import { CreatorSelector } from '../../../state/selectors/creators.selector';

@Component({
	selector: 'app-creators-list',
	standalone: true,
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		CardComponent,
		MatPaginatorModule
	],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class CreatorsListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected data: Signal<CreatorState> =
		this._store.selectSignal(CreatorSelector);
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

		this._store.dispatch(GetCreatorsAction({ params: this.params() }));
	}

	protected getItem(_creator: TCreator): CardItem {
		return {
			title: _creator.fullName,
			src: getSrc(_creator.thumbnail)
		};
	}

	ngOnInit(): void {
		this._store.dispatch(GetCreatorsAction({ params: this.params() }));
	}
}
