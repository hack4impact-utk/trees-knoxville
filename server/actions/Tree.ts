import mongoDB from "../index";
import TreeSchema from "../models/Tree";
import { Types } from "mongoose";
import { Tree } from "../../utils/types";

/**
 * @param tree The tree to insert into our database.
 */
 export const addTree = async function (tree: Tree) {
    await mongoDB();
    if (!tree) {
        console.error("Could not add tree.");
        throw Error;
    }

    await TreeSchema.create(tree);
};
