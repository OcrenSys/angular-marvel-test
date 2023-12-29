import { createAction, props } from '@ngrx/store';
import { TComic } from '../../shared/types/comic.type';

export const ComicsAction = {
  GET_COMIC: '[Get Comics] Get comics from API',
  STORE_COMIC: '[Store Comics] Store comics inside the state',
  GET_COMIC_BY_ID: '[Get Comic By Id] Get comic details from API',
};

export const GetComicsAction = createAction(ComicsAction.GET_COMIC);

export const StoreComicsAction = createAction(
  ComicsAction.STORE_COMIC,
  props<{ comics: TComic[] }>()
);

export const GetComicByIdAction = createAction(
  ComicsAction.GET_COMIC_BY_ID,
  props<{ id: number }>()
);
