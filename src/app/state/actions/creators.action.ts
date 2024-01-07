import { createAction, props } from '@ngrx/store';

import { TCreator } from '../../shared/types/creator.type';

export const CreatorsAction = {
	GET_CREATORS: '[Get Creators] Get creators from API',
	STORE_CREATORS: '[Store Creators] Store creators inside the state',
	GET_CREATOR_BY_ID: '[Get Creator By Id] Get creator details from API'
};

export const GetCreatorsAction = createAction(CreatorsAction.GET_CREATORS);

export const StoreCreatorsAction = createAction(
	CreatorsAction.STORE_CREATORS,
	props<{ creators: TCreator[] }>()
);

export const GetCreatorByIdAction = createAction(
	CreatorsAction.GET_CREATOR_BY_ID,
	props<{ id: number }>()
);
