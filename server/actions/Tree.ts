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

/**
 * @param queryTree tree object containing only the ID
 * @param newTree new tree to replace the old one
 */
export const updateTree = async function (queryTree: Tree, newTree: Tree) {
    await mongoDB();
    const options = { useFindAndModify: true };

    // update only updates a single item since we specify the _id field
    // in queryTree. newTree replaces the old object.
    await TreeSchema.findOneAndUpdate(queryTree, newTree, options);
}

/**
 * 
 * @param visibilityStatus true for published false for unpublished
 * @returns trees with given visibilityStatus
 */
export const getTreesByVisibilityStatus = async function (visibilityStatus: boolean) {
    await mongoDB();
    return await TreeSchema.find({published:visibilityStatus});
}

