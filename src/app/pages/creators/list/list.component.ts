import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CardComponent } from '../../../components/card/card.component';
import { getSrc } from '../../../shared/helpers/placeholders.helper';
import { CardItem } from '../../../shared/interfaces/card.item';
import { TCreator } from '../../../shared/types/creator.type';
import { GetCreatorsAction } from '../../../state/actions/creators.action';
import { LoadingSelector } from '../../../state/selectors/comics.selector';
import { CreatorSelector } from '../../../state/selectors/creators.selector';

@Component({
	selector: 'app-creators-list',
	standalone: true,
	imports: [CommonModule, MatProgressSpinnerModule, CardComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class CreatorsListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected creators$: Observable<TCreator[]> =
		this._store.select(CreatorSelector);
	protected loading$: Observable<boolean> = this._store.select(LoadingSelector);

	ngOnInit(): void {
		this._store.dispatch(GetCreatorsAction());
	}
	protected getItem(_creator: TCreator): CardItem {
		console.log(_creator);
		return {
			title: _creator.fullName,
			src: getSrc(_creator.thumbnail)
		};
	}
}
