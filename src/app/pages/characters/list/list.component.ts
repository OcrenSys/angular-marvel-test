import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TruncatePipe } from '../../../pipes/truncate/truncate.pipe';
import { TCharacters } from '../../../shared/types/character.type';
import { GetCharactersAction } from '../../../state/actions/characters.action';
import { CharacterSelector } from '../../../state/selectors/characters.selector';
import { LoadingSelector } from '../../../state/selectors/characters.selector';

@Component({
	selector: 'app-characters-list',
	standalone: true,
	imports: [CommonModule, TruncatePipe, MatProgressSpinnerModule],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class CharactersListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected characters$: Observable<TCharacters[]> =
		this._store.select(CharacterSelector);
	protected loading$: Observable<boolean> = this._store.select(LoadingSelector);

	ngOnInit() {
		this._store.dispatch(GetCharactersAction());
	}
}
