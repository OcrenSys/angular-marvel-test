import { TComic } from './comic.type';
import { TGeneric } from './generic.type';
import { TStory } from './story.type';
import { TThumbnail } from './thumbnail.type';
import { TUrl } from './url.type';

export type TResult = {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: TThumbnail;
	resourceURI: string;
	urls: TUrl[];
	comics: TComic | TGeneric;
	series: TComic | TGeneric;
	stories: TStory | TGeneric;
	events: TComic | TGeneric;
};
