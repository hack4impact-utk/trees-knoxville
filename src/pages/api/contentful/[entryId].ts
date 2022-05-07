import { NextApiRequest, NextApiResponse } from "next";
import { deleteEntryByID, getTreeEntry } from "server/actions/Contentful";
import { Tree } from "utils/types";



// @route   GET    /api/contentful/[entryId] - Returns entry from contentful with the given Id
// @route   DELETE /api/contentful/[entryId] - Deletes entry from contentful with the given Id
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "GET") {
            const entry = await getTreeEntry(req.query.entryId as string);
            res.status(200).json({
                success: true,
                payload: entry,
            });
        }

        if (req.method === "DELETE") {
            const tree: Tree = JSON.parse(req.body);
            await deleteEntryByID(req.query.entryId as string, tree);
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