import { createAction, props } from '@ngrx/store';

import { Params } from '../../shared/interfaces/params';
import { TData } from '../../shared/types/data.type';

export const ComicsAction = {
	GET_COMICS: '[Get Comics] Get comics from API',
	STORE_COMICS: '[Store Comics] Store comics inside the state',
	GET_COMIC_BY_ID: '[Get Comic By Id] Get comic details from API'
};

export const GetComicsAction = createAction(
	ComicsAction.GET_COMICS,
	props<{ params: Params }>()
);

export const StoreComicsAction = createAction(
	ComicsAction.STORE_COMICS,
	props<{ data: TData }>()
);

export const GetComicByIdAction = createAction(
	ComicsAction.GET_COMIC_BY_ID,
	props<{ id: number }>()
);
