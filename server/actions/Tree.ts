import mongoDB from "server/index";
import TreeSchema from "server/models/Tree";
import { Types } from "mongoose";
import { Tree } from "utils/types";
import TreeModel from "server/models/Tree";

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

export const filterTrees = async function (filterTree: Tree) {
    await mongoDB();
    const trees = await TreeSchema.find(filterTree);
    return trees;
}