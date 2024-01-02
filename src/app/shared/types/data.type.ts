import { TResult } from "./result.type";

export type TData = {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: TResult[];
  }