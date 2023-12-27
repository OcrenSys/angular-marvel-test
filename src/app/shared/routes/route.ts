export const Routes = {
  comics: () => '/comics',
  comicsById: (id: string) => `comics/${id}`,

  characters: () => '/characters',

  stories: () => '/stories',

  creators: () => '/creators',

  events: () => '/events',
  
  series: () => '/series',
};
