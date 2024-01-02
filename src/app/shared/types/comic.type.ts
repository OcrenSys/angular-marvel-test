import { TItem } from "./item.type";
import { TStory } from "./story.type";
import { TThumbnail } from "./thumbnail.type";
import { TUrl } from "./url.type";

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
  urls: TUrl[];
  series: Series;
  variants: Series[];
  collections: any[];
  collectedIssues: any[];
  dates: Date[];
  prices: Price[];
  thumbnail: TThumbnail;
  images: any[];
  creators: Creators;
  characters: any;
  stories: TStory;
  events: any;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: TItem[];
  returned: number;
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
