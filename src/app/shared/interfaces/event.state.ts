import { TEvent } from '../types/event.type';

export interface EventState {
	loading?: boolean;
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: TEvent[];
}
