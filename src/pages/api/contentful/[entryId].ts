import { NextApiRequest, NextApiResponse } from "next";
import { createTreeEntry, getTreeEntry } from "server/actions/Contentful";
import { ContentfulEntry } from "utils/types";



// @route   GET   /api/contentful/[entryId] - Returns entry from contentful with the given Id
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "GET") {
            const entry = await getTreeEntry(req.query.entryId as string);
            return entry;
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error,
        })
    }
};