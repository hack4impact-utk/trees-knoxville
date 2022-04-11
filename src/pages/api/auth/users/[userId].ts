import { NextApiRequest, NextApiResponse } from "next";
import { getUser, setUserPassword, updateUser } from "server/actions/User";
import { User } from "utils/types";

// @route   GET   /api/auth/users/[userId] - returns a user in auth0
// @route   PATCH /api/auth/users/[userId] - updates a user in auth0
// @route   POST  /api/auth/users/[userId] - sends a password reset link to a user in auth0
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        if (req.method === "GET") {
            const id: string = req.body;

            const users = await getUser(id);

            res.status(200).json({
                success: true,
                payload: users,
            });
        } 
        
        if (req.method === "PATCH") {
            const user: User = JSON.parse(req.body);

            const r = await updateUser(user);

            res.status(200).json({
                success: true,
            });
        }

        if (req.method === "POST") {
            const user: User = JSON.parse(req.body);

            const r = await setUserPassword(user.email!);

            res.status(200).json({
                success: true,
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
