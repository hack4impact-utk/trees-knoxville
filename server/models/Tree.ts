import { model, models, Model, Schema, Document } from "mongoose";
import { Tree } from "../../utils/types";

export const TreeSchema = new Schema({
    

});

export interface EventDocument extends Omit<Tree, "_id">, Document {}

export default (models.Tree as Model<TreeDocument>) || model<TreeDocument>("Tree", TreeSchema);