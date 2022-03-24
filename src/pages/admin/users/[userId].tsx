import { NextPage, NextPageContext } from "next";
import { User } from "utils/types";
import React from "react";
import { getUser } from "server/actions/User";
import UpsertUserForm from "src/components/UpsertUserForm";

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
        <UpsertUserForm user={user}/>
    </div>
    );
}


export async function getServerSideProps(context: NextPageContext) {
    try {

        // get userId from url by using context
        const userId = context.query.userId as string;

        // this func is run on server-side, so we can safely fetch the user directly
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