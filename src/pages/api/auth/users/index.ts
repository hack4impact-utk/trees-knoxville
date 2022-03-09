import { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "server/actions/User";

// @route   GET  /api/auth/users - Returns all users from auth0
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        if (req.method === "GET") {
            const users = await getUsers()

            res.status(200).json({
                success: true,
                payload: users,
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
