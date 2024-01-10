import { TCharacters } from './character.type';
import { TComic } from './comic.type';
import { TCreator } from './creator.type';
import { TEvent } from './event.type';
import { TStory } from './story.type';

export type TData = {
	loading?: boolean;
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: TComic[] | TCharacters[] | TStory[] | TEvent[] | TCreator[];
};
