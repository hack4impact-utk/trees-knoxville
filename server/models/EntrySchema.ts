import { Schema } from "mongoose";

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

export default EntrySchema;