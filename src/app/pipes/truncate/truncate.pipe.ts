import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate',
	standalone: true
})
export class TruncatePipe implements PipeTransform {
	transform(value: string | undefined, limit: number): string {
		if (value && value.length > limit) {
			return value.substring(0, limit).concat('...');
		}

		return value || '';
	}
}
