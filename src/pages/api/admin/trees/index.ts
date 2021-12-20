import { NextApiRequest, NextApiResponse } from "next";
import { Tree } from "utils/types"
import { addTree, getTrees } from "server/actions/Tree"



// @route   POST /api/events/admin/trees - Create a tree from form data
// @route   GET  /api/events/admin/trees - Returns all trees in the database, regardless of visibility status
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            const tree: Tree = JSON.parse(req.body);
            
            await addTree(tree);

            res.status(200).json({
                success: true,
                payload: {}
             });
        }

        if (req.method === "GET") {
            const trees: Tree[] = await getTrees()

            res.status(200).json({
                success: true,
                payload: trees,
            });
        }       
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error,
        })
    }
}
