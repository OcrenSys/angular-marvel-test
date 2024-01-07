import { TStory } from '../types/story.type';

export interface StoryState {
	stories: TStory[];
	loading: boolean;
}
