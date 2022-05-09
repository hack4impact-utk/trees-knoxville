import { Tree } from "utils/types";
import { updateTree } from "./Tree";


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