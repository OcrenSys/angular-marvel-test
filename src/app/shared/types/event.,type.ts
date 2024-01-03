import { TGeneric } from "./generic.type";
import { TItem } from "./item.type";
import { TThumbnail } from "./thumbnail.type";
import { TUrl } from "./url.type";

  export type TEvent = {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: TUrl[];
    modified: string;
    start: string;
    end: string;
    thumbnail: TThumbnail;
    creators: TGeneric;
    characters: TGeneric;
    stories: TGeneric;
    comics: TGeneric;
    series: TGeneric;
    next: TItem;
    previous: TItem;
  }