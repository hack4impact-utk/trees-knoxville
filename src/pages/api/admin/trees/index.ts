import { NextApiRequest, NextApiResponse } from "next";
import { Tree } from "../../../../../utils/types"
import { addTree, updateTree } from "../../../../../server/actions/Tree"
import { format } from "prettier";



// @route   POST /api/events/admin/trees - Create a tree from form data
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            const form: Tree = JSON.parse(req.body);
            
            await addTree(form);

        }
    } catch (error) {}
}