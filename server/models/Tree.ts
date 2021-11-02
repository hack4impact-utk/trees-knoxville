import { model, models, Model, Schema, Document } from "mongoose";
import { Tree } from "../../utils/types";

export const TreeSchema = new Schema({

    species: {
        type: String,
        required: false,
    },

    age: {
        type: Number,
        required: true,
    },

    coordinates: {

        latitude: {
            type: Number,
            required: true,
        },

        longitude: {
            type: Number,
            required: true,
        }
    },

    adopted: {
        type: Boolean,
        required: true,
    },

    watering: {
        type: Boolean,
        required: true,
    },

    pruning: {
        type: Boolean,
        required: true,
    },
});

export interface TreeDocument extends Omit<Tree, "_id">, Document {}

export default (models.Tree as Model<TreeDocument>) || model<TreeDocument>("Tree", TreeSchema);
