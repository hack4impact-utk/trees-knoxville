import { NextPage, NextPageContext } from "next";
import { Tree, User } from "utils/types";
import React from "react";
import { getTree } from "server/actions/Tree";
import UpsertTreeForm from "src/components/UpsertTreeForm";
import { getUser } from "server/actions/User";

interface Props {
    user: User,
}

const AdminEdit: NextPage<Props> = ({ user }) => {
    return (
    <div>
        <head>
            <title>Admin Edit | Trees Knoxville</title>
        </head>
        <h1>Admin User Page</h1>
        <span>Name: {user.name || "NO NAME"}</span><br/>
        <span>Email: {user.email || "NO EMAIL"}</span><br/>
        <span>Phone Number: {user.phone || "NO PHONE"}</span>
    </div>
    );
}


export async function getServerSideProps(context: NextPageContext) {
    try {

        // get userId from url by using context
        const userId = context.query.userId as string;


        // this func is run on server-side, so we can safely fetch the event directly
        const user: User = await getUser(userId);

        return {
            props: {
                user: JSON.parse(JSON.stringify(user)) as User,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

export default AdminEdit; 