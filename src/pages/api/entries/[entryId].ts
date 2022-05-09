import { NextApiRequest, NextApiResponse } from "next";
import { deleteEntryByID } from "server/actions/Entry";
import { Tree } from "utils/types";

// @route   DELETE /api/entries/[entryId] - Deletes entry from contentful with the given Id
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

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