import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CardComponent } from '../../../components/card/card.component';
import { getSrc } from '../../../shared/helpers/placeholders.helper';
import { CardItem } from '../../../shared/interfaces/card.item';
import { TStory } from '../../../shared/types/story.type';
import { GetStoriesAction } from '../../../state/actions/stories.action';
import {
	LoadingSelector,
	StorySelector
} from '../../../state/selectors/stories.selector';

@Component({
	selector: 'app-stories-list',
	standalone: true,
	imports: [CommonModule, MatProgressSpinnerModule, CardComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class StoriesListComponent implements OnInit {
	private readonly _store = inject(Store);
	protected stories$: Observable<TStory[]> = this._store.select(StorySelector);
	protected loading$: Observable<boolean> = this._store.select(LoadingSelector);

	ngOnInit(): void {
		this._store.dispatch(GetStoriesAction());
	}

	protected getItem(_story: TStory): CardItem {
		console.log(_story);
		return {
			title: _story.title,
			subTitle: _story.description,
			src: getSrc(_story.thumbnail)
		};
	}
}
