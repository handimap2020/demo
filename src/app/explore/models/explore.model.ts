export interface Spot {
    id: string;
    name: string;
    url: string;
    x: number;
    y: number;
    tags: string[];
}

export interface SpotForm {
    name: string;
    url: string;
    x: number;
    y: number;
    tags: string[];
}
