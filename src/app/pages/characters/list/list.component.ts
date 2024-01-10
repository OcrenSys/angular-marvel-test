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

import { TruncatePipe } from '../../../pipes/truncate/truncate.pipe';
import { getSrc } from '../../../shared/helpers/placeholders.helper';
import { CharacterState } from '../../../shared/interfaces/character.state';
import { TCharacters } from '../../../shared/types/character.type';
import { GetCharactersAction } from '../../../state/actions/characters.action';
import { CharacterSelector } from '../../../state/selectors/characters.selector';
import { LoadingSelector } from '../../../state/selectors/characters.selector';

@Component({
	selector: 'app-characters-list',
	standalone: true,
	imports: [
		CommonModule,
		TruncatePipe,
		MatProgressSpinnerModule,
		MatPaginatorModule
	],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class CharactersListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected data: Signal<CharacterState> =
		this._store.selectSignal(CharacterSelector);
	protected loading$: Observable<boolean> = this._store.select(LoadingSelector);

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

		this._store.dispatch(GetCharactersAction({ params: this.params() }));
	}

	protected getSrc(character: TCharacters): string {
		return getSrc(character.thumbnail);
	}

	ngOnInit() {
		this._store.dispatch(
			GetCharactersAction({
				params: this.params()
			})
		);
	}
}
