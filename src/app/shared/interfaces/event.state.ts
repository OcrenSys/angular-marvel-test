import { TEvent } from '../types/event.type';

export interface EventState {
	events: TEvent[];
	loading: boolean;
}
