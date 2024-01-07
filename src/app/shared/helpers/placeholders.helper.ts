import { TThumbnail } from '../types/thumbnail.type';
export const IMAGE_PLACEHOLDER =
	'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

export function getSrc(_thumbnail: TThumbnail | undefined): string {
	if (_thumbnail?.path && _thumbnail?.extension)
		return `${_thumbnail?.path}.${_thumbnail?.extension}`;
	return IMAGE_PLACEHOLDER;
}
