import { TItem } from "./item.type";

export type TGeneric = {
    available: number;
    collectionURI: string;
    items: TItem[];
    returned: number;
}