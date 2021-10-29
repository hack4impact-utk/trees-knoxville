
export interface Tree {
    _id?: string;
    species?: string;
    age?: number;
    coordinates?: {
        latitude: number,
        longitude: number,
    };
    adopted?: boolean;
    watering?: boolean;
    pruning?: boolean;
}