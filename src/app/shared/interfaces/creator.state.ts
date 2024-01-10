import { TCreator } from '../types/creator.type';

export interface CreatorState {
	loading?: boolean;
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: TCreator[];
}
