import { Entry, Tree } from "utils/types";
import { getTree, updateTree } from "./Tree";


/**
 * @param entryId the ID of the entry to be deleted
 * @param tree    the tree that the entry is being removed from
 */
 export async function deleteEntryByID(entryId: string, tree: Tree) {

    // removes the entry Id from mongoDB
    if (tree.entries) {

        tree.entries = tree.entries.filter((entry) => {
            return entry.id != entryId;
        })
        
        await updateTree({ _id: tree._id }, tree);
    }
}

/**
 * @param entry  entry to be added to the tree. id field is not yet set
 * @param treeId the Id of the tree that the entry is being added to
 */
export async function createEntry(entry: Entry, treeId: string) {
    
    const tree = await getTree({ _id: treeId });

    // if there are no entries for a tree, create an array. Otherwise, push onto it
    if (!tree.entries) {
        tree.entries = [];
        tree.entries.push(entry);
    }
    else {
        tree.entries.push(entry);
    }

    await updateTree({ _id: treeId }, tree);
}