import { TCharacters } from '../types/character.type';

export interface CharacterState {
  characters: TCharacters[];
  loading: boolean;
}
