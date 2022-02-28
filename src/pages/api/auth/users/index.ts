import { NextApiRequest, NextApiResponse } from "next";
import { Tree } from "utils/types"
import { addTree, getTrees } from "server/actions/Tree"


// @route   GET  /api/auth/users - Returns all users from auth0
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

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
