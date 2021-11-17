
export interface Tree {
    _id?: string;
    species?: string;
    age?: number;
    coordinates?: {
        latitude?: string,
        longitude?: string,
    };
    adopted?: boolean;
    watering?: boolean;
    pruning?: boolean;
    published?: boolean;
}