import { model, models, Model, Schema, Document } from "mongoose";
import { Tree } from "utils/types";
import ContentfulImageSchema from "./ContentfulImageSchema";

export const TreeSchema = new Schema({

    species: {
        type: String,
        required: false,
    },

    age: {
        type: Number,
        required: true,
        default: 0,
    },

    coordinates: {

        latitude: {
            type: String,
            required: true,
        },

        longitude: {
            type: String,
            required: true,
        }
    },

    adopted: {
        type: Boolean,
        required: true,
        default: false,
    },

    watering: {
        type: Boolean,
        required: true,
        default: false,
    },

    pruning: {
        type: Boolean,
        required: true,
        default: false,
    },

    datePlanted: {
        type: Date,
        required: true,
    },

    published: {
        type: Boolean,
        required: true,
        default: false,
    },

    image: {
        type: ContentfulImageSchema,
        required: false,
    },

    entryIds: {
        type: [String],
        required: false,
    },
});

export interface TreeDocument extends Omit<Tree, "_id">, Document {}

export default (models.Tree as Model<TreeDocument>) || model<TreeDocument>("Tree", TreeSchema);
