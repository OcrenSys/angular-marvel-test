import { TStory } from '../types/story.type';

export interface StoryState {
	loading?: boolean;
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: TStory[];
}
