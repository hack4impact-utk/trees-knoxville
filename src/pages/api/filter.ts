import { NextApiRequest, NextApiResponse } from "next";
import { Tree } from "utils/types";
import { filterTrees } from "server/actions/Tree";
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = req.body as Tree;
        console.log(data);
        const trees = await filterTrees(data);
        res.status(200).json({
            payload: trees, 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            payload: error,
        })
    }
}