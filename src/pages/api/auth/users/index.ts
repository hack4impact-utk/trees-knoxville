import { NextApiRequest, NextApiResponse } from "next";
import { addUser, getUsers } from "server/actions/User";
import { User } from "utils/types";

// @route   GET  /api/auth/users - Returns all users from auth0
// @route   POST /api/auth/users - Creates a user in auth0
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "GET") {
            const users = await getUsers();

            res.status(200).json({
                success: true,
                payload: users,
            });
        } 

        if (req.method === "POST") {
            const user: User = JSON.parse(req.body);

            await addUser(user);

            res.status(201).json({
                success: true,
                payload: {},
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
