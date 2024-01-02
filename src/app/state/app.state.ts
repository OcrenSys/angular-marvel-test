import { CharacterState } from '../shared/interfaces/character.state';
import { ComicState } from '../shared/interfaces/comic.state';

export interface AppState {
  comics: ComicState;
  characters: CharacterState;
}
