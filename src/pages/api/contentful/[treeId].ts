import { NextApiRequest, NextApiResponse } from "next";
import { createTreeEntry } from "server/actions/Contentful";



// @route   POST  /api/contentful/[treeId] - Adds a entry to a tree
// @route   GET   /api/contentful/[treeId] - Returns all tree entries for the given tree
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            const r = await createTreeEntry(req.body);

            res.status(200).json({
                success: true,
            });
        }

        if (req.method === "GET") {
            
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error,
        })
    }
};