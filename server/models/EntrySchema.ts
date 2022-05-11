import { Schema } from "mongoose";
import { Entry } from "utils/types";

// This schema isn't a collection itself, but is instead embedded within other collections
export const EntrySchema = new Schema({
    id: {
        type: String,
        required: false,
    },
    user_name: {
        type: String,
        required: false,
    },
    entry_date: {
        type: Date,
        required: false,
    },
    entry_text: {
        type: String,
        required: false,
    },
});

//export interface EntryDocument extends Omit<Entry, "_id">, Document {} // potential solution to having _id and id?
                                                                      // remove objectID from id field first. see what happens!

export default EntrySchema;