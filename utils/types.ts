
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
}

export interface User {
    user_id?: string;
    name?: string;
    email?: string;
    phone?: string;
    trees?: string[],
    image?: ContentfulImage;
}

export interface ContentfulImage {
    assetID: string;
    url: string;
}