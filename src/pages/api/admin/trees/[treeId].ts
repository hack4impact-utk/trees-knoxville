import { NextApiRequest, NextApiResponse } from "next";
import { Tree } from "utils/types"
import { updateTree } from "server/actions/Tree"



// @route   PUT  /api/events/admin/trees/[treeId] - Updates a tree from form data
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        if (req.method === "PUT") {
            const id = req.query.treeId as string;
            const tree: Tree = JSON.parse(req.body);

            await updateTree({ _id: id }, tree);

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
}
