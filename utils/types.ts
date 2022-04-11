
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
    datePlanted?: Date;
    published?: boolean;
    image?: ContentfulImage;
}

export interface User {
    user_metadata?: {
        phone?: string,
        trees?: string[],
    };
    user_id?: string;
    name?: string;
    email?: string;
}

export interface ContentfulImage {
    assetID: string;
    url: string;
}