import { TComic } from './comic.type';
import { TStory } from './story.type';
import { TThumbnail } from './thumbnail.type';
import { TUrl } from './url.type';

export type TCharacters = {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: TThumbnail;
	resourceURI: string;
	comics: TComic;
	series: TComic;
	stories: TStory;
	events: TComic;
	urls: TUrl[];
};
