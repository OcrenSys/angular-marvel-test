import { TCharacters } from '../types/character.type';

export interface CharacterState {
	loading?: boolean;
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: TCharacters[];
}
