import { TData } from './data.type';

export type TRootObject = {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	etag: string;
	data: TData;
};
