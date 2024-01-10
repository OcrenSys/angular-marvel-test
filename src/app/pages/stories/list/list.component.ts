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
import { StoryState } from '../../../shared/interfaces/story.state';
import { TStory } from '../../../shared/types/story.type';
import { GetStoriesAction } from '../../../state/actions/stories.action';
import {
	LoadingSelector,
	StorySelector
} from '../../../state/selectors/stories.selector';

@Component({
	selector: 'app-stories-list',
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
export class StoriesListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected data: Signal<StoryState> = this._store.selectSignal(StorySelector);
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

		this._store.dispatch(GetStoriesAction({ params: this.params() }));
	}

	protected getItem(_story: TStory): CardItem {
		return {
			title: _story.title,
			subTitle: _story.description,
			src: getSrc(_story.thumbnail)
		};
	}

	ngOnInit(): void {
		this._store.dispatch(GetStoriesAction({ params: this.params() }));
	}
}
