export type TStory = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

interface Item {
  resourceURI: string;
  name: string;
  type: string;
}
