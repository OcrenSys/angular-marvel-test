import { TGeneric } from './generic.type';
import { TItem } from './item.type';
import { TThumbnail } from './thumbnail.type';
import { TUrl } from './url.type';

export type TComic = {
	id: number;
	digitalId: number;
	title: string;
	issueNumber: number;
	variantDescription: string;
	description: string;
	modified: string;
	isbn: string;
	upc: string;
	diamondCode: string;
	ean: string;
	issn: string;
	format: string;
	pageCount: number;
	textObjects: unknown[];
	resourceURI: string;
	urls: TUrl[];
	series: TItem;
	variants: TItem[];
	collections: unknown[];
	collectedIssues: unknown[];
	dates: Date[];
	prices: Price[];
	thumbnail: TThumbnail;
	images: unknown[];
	creators: TGeneric;
	characters: TGeneric;
	stories: TGeneric;
	events: TGeneric;
};

interface Price {
	type: string;
	price: number;
}
