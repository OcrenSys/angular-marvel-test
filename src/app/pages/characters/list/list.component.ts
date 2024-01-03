import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TCharacters } from '../../../shared/types/character.type';
import { CharacterSelector } from '../../../state/selectors/characters.selector';
import { LoadingSelector } from '../../../state/selectors/characters.selector';
import { GetCharactersAction } from '../../../state/actions/characters.action';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TruncatePipe } from '../../../pipes/truncate/truncate.pipe';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, TruncatePipe, MatProgressSpinnerModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
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
