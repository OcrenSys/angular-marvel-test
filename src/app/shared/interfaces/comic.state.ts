import { TComic } from '../types/comic.type';

export interface ComicState {
	loading?: boolean;
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: TComic[];
}
