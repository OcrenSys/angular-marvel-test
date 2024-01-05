import { TGeneric } from './generic.type';
import { TItem } from './item.type';
import { TThumbnail } from './thumbnail.type';

export type TStory = {
	id: number;
	title: string;
	description: string;
	resourceURI: string;
	type: string;
	modified: string;
	thumbnail?: TThumbnail;
	creators: TGeneric;
	characters: TGeneric;
	series: TGeneric;
	comics: TGeneric;
	events: TGeneric;
	originalIssue: TItem;
};
