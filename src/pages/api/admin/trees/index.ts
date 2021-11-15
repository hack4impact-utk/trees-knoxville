import { NextApiRequest, NextApiResponse } from "next";
import { Tree } from "utils/types"
import { addTree, getTreesByVisibilityStatus } from "server/actions/Tree"



// @route   POST /api/events/admin/trees - Create a tree from form data
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            const form: Tree = JSON.parse(req.body);
            
            await addTree(form);

            res.status(200).json({
                payload: {}
             });
        }
    } catch (error) {}
}
