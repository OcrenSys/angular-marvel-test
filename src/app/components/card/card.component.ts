import { Component, Input } from '@angular/core';

import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { CardItem } from '../../shared/interfaces/card.item';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [TruncatePipe],
	templateUrl: './card.component.html',
	styleUrl: './card.component.css'
})
export class CardComponent {
	@Input() item: CardItem | undefined = undefined;
}
