import { Component, OnInit, inject } from '@angular/core';
import { TComic } from '../../shared/types/comic.type';
import { Store } from '@ngrx/store';
import { GetComicsAction } from '../../state/actions/comics.action';
import { CommonModule } from '@angular/common';
import {
  ComicsSelector,
  LoadingSelector,
} from '../../state/selectors/comics.selector';
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css',
})
export class ComicsComponent implements OnInit {
  private readonly _store = inject(Store);
  protected comics$: Observable<TComic[]> = this._store.select(ComicsSelector);
  protected loading$: Observable<boolean> = this._store.select(LoadingSelector);

  ngOnInit(): void {
    this._store.dispatch(GetComicsAction());
  }
}
