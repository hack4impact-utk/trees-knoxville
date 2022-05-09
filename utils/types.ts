
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
    entries?: Entry[];
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

export interface Entry {
    id: string,
    user_name: string,
    entry_date: Date,
    entry_text: string,
}