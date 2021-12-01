import { IPeople } from './people';

export interface IPagination {
    count: number;
    next: string;
    previous: string;
    results: IPeople[];
}
