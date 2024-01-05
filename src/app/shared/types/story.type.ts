import { TGeneric } from './generic.type';
import { TItem } from './item.type';

export type TStory = {
	id: number;
	title: string;
	description: string;
	resourceURI: string;
	type: string;
	modified: string;
	thumbnail?: any;
	creators: TGeneric;
	characters: TGeneric;
	series: TGeneric;
	comics: TGeneric;
	events: TGeneric;
	originalIssue: TItem;
};
