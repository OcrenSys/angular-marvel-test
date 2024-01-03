import { TGeneric } from "./generic.type";
import { TThumbnail } from "./thumbnail.type";
import { TUrl } from "./url.type";

export type TCreator = {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    fullName: string;
    modified: string;
    thumbnail: TThumbnail;
    resourceURI: string;
    comics: TGeneric;
    series: TGeneric;
    stories: TGeneric;
    events: TGeneric;
    urls: TUrl[];
  }

  