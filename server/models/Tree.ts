import { model, models, Model, Schema, Document } from "mongoose";
import { Tree } from "../../utils/types";

export const TreeSchema = new Schema({

    species: {
        type: String,
        required: false,
    },

    age: {
        type: Number,
        required: false,
    },

    coordinates: {
        latitude: {
            type: Number,
            required: false,
        },

        longitude: {
            type: Number,
            required: false,
        }
    },

    adopted: {
        type: Boolean,
        required: false,
    },

    watering: {
        type: Boolean,
        required: false,
    },

    pruning: {
        type: Boolean,
        required: false,
    },
});

export interface EventDocument extends Omit<Tree, "_id">, Document {}

export default (models.Tree as Model<TreeDocument>) || model<TreeDocument>("Tree", TreeSchema);