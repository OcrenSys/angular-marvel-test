import { Component, Input } from '@angular/core';

import { TComic } from '../../shared/types/comic.type';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [],
	templateUrl: './card.component.html',
	styleUrl: './card.component.css'
})
export class CardComponent {
	@Input() item: TComic | undefined = undefined;
}
