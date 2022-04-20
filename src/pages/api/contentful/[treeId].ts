import { NextApiRequest, NextApiResponse } from "next";



// @route   POST  /api/contentful/[treeId] - Adds a entry to a tree
// @route   GET   /api/contentful/[treeId] - Returns all tree entries
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {

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