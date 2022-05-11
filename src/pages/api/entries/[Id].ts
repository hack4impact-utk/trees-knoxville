import { NextApiRequest, NextApiResponse } from "next";
import { createEntry, deleteEntryByID } from "server/actions/Entry";
import { Entry, Tree } from "utils/types";
//import { ObjectId } from "mongodb"

// @route   DELETE /api/entries/[entryId] - Deletes entry from a tree with the given Id
// @route   POST   /api/entries/[treeId]  - Creates an entry for the tree with the given Id
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        if (req.method === "DELETE") {
            const tree: Tree = JSON.parse(req.body);

            await deleteEntryByID(req.query.Id as string, tree);
            res.status(200).json({
                success: true,
                payload: {}
            });
        }

        if (req.method === "POST") {
            const entry: Entry = JSON.parse(req.body);

            // creates an ObjectId for the the entry, which must be done server-side
            //entry.id = new ObjectId().toString();
            entry.id = "ID"+new Date().toString();
            await createEntry(entry, req.query.Id as string);
            res.status(200).json({
                success: true,
                payload: {}
            });
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error,
        })
    }
};