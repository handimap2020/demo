export interface Spot {
    id: string;
    name: string;
    x: number;
    y: number;
    tags: string[];
}

export interface SpotForm {
    name: string;
    x: number;
    y: number;
    tags: string[];
}
