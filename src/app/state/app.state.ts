import { CharacterState } from '../shared/interfaces/character.state';
import { ComicState } from '../shared/interfaces/comic.state';
import { CreatorState } from '../shared/interfaces/creator.state';
import { EventState } from '../shared/interfaces/event.state';
import { StoryState } from '../shared/interfaces/story.state';

export interface AppState {
	comics: ComicState;
	characters: CharacterState;
	stories: StoryState;
	creators: CreatorState;
	events: EventState;
}
