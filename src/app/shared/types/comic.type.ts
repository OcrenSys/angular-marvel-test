import { TCharacters } from "./character.type";
import { TStories } from "./story.type";

export type TComic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Series[];
  collections: any[];
  collectedIssues: any[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: any[];
  creators: Creators;
  characters: TCharacters;
  stories: TStories;
  events: TCharacters;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Item {
  resourceURI: string;
  name: string;
  role: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Price {
  type: string;
  price: number;
}

interface Date {
  type: string;
  date: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Url {
  type: string;
  url: string;
}