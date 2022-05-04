import { NextApiRequest, NextApiResponse } from "next";
import { createTreeEntry } from "server/actions/Contentful";


// @route   POST  /api/contentful/ - Creates a tree entry in contentful
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            //const treeId = req.query.Id as string;
            const entryId = await createTreeEntry(req.body);
            res.status(200).json({
                success: true,
                entryId: entryId,
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