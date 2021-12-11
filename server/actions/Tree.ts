import mongoDB from "server/index";
import TreeSchema from "server/models/Tree";
import { Tree } from "utils/types";
import urls from "utils/urls";

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
 * @param queryTree tree object containing only ID of the 
 * @returns a single tree
 */
export const getTree = async function(queryTree: Tree) {
    await mongoDB();
    
    const keys = Object.keys(queryTree);
    
    if (!queryTree || keys.length != 1 || keys[0] != "_id") {
        console.error("Invalid ID");
        throw new Error("Invalid ID");
    }

    const tree = await TreeSchema.findById(queryTree);
    if (!tree) {
        console.error("Tree not found");
        throw new Error("Tree not found");
    }

    return tree;
}

/**
 * @returns all trees in the database
 */
export const getTrees = async function() {
    await mongoDB();

    const trees = await TreeSchema.find({});
    if (!trees) {
        console.error("No trees found");
        throw new Error("No trees found");
    }

    return trees;
}

/**
 * @param id The tree to delete from our database.
 */
export const deleteTree = async function (queryTree: Tree) {
    await mongoDB();
    
    const keys = Object.keys(queryTree);

    if (!queryTree || keys.length != 1 || keys[0] != "_id") {
        console.error("Invalid ID");
        throw new Error("Invalid ID");
    }

    const model = await TreeSchema.findOneAndDelete(queryTree);
    if (!model) {
        console.error("Tree not found");
        throw Error("Tree not found");
    }
}
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

