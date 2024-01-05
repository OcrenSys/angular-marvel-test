import { TComic } from '../types/comic.type';

export interface ComicState {
	comics: TComic[];
	loading: boolean;
}
