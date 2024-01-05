export const Routes = {
	comics: {
		list: () => `/comics`,
		details: (id: string) => `comics/${id}`,
		charcters: (id: string) => `comics/${id}/charcters`,
		creators: (id: string) => `comics/${id}/creators`,
		events: (id: string) => `comics/${id}/events`,
		stories: (id: string) => `comics/${id}/stories`
	},

	characters: {
		list: () => `/characters`,
		details: (id: string) => `characters/${id}`,
		comics: (id: string) => `characters/${id}/comics`,
		series: (id: string) => `characters/${id}/series`,
		events: (id: string) => `characters/${id}/events`,
		stories: (id: string) => `characters/${id}/stories`
	},

	stories: {
		list: () => `/stories`,
		details: (id: string) => `stories/${id}`,
		characters: (id: string) => `stories/${id}/characters`,
		comics: (id: string) => `stories/${id}/comics`,
		creators: (id: string) => `stories/${id}/creators`,
		events: (id: string) => `stories/${id}/events`,
		series: (id: string) => `stories/${id}/series`
	},

	creators: {
		list: () => `/creators`,
		details: (id: string) => `creators/${id}`,
		comics: (id: string) => `creators/${id}/comics`,
		events: (id: string) => `creators/${id}/events`,
		series: (id: string) => `creators/${id}/series`,
		stories: (id: string) => `creators/${id}/stories`
	},

	events: {
		list: () => `/events`,
		details: (id: string) => `events/${id}`,
		characters: (id: string) => `events/${id}/characters`,
		comics: (id: string) => `events/${id}/comics`,
		creators: (id: string) => `events/${id}/creators`,
		series: (id: string) => `events/${id}/series`,
		stories: (id: string) => `events/${id}/stories`
	},

	series: {
		list: () => `/series`,
		details: (id: string) => `series/${id}`,
		characters: (id: string) => `series/${id}/characters`,
		comics: (id: string) => `series/${id}/comics`,
		creators: (id: string) => `series/${id}/creators`,
		events: (id: string) => `series/${id}/events`,
		series: (id: string) => `series/${id}/series`
	}
};
