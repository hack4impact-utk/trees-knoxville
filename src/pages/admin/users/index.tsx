import React from "react";
import { Tree } from "utils/types";
import SingleTree from "src/components/SingleTree";
import { GetStaticPropsContext, NextPage } from "next";
import { getTrees } from "server/actions/Tree";
import urls from "utils/urls";
import UserTable from "src/components/UserTable";
import { getUsers } from "server/actions/User";

interface Props {
    users: [],
}

const AdminUsers: NextPage<Props> = ({ users }) => {

    return (
    <div>    
        <head>
            <title>Admin Trees | Trees Knoxville</title>
        </head>
        <h1>Admin Trees Page</h1>
        
        <div>
            <UserTable users={users}/>
        </div>
    </div>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    try {

        const users = await getUsers();
        
        if (users) {
            console.log(JSON.parse(JSON.stringify(users)));
        }
        else {
            throw new Error ("No users found");
        }

        return {
            props: {
                users: (JSON.parse(JSON.stringify(users))) 
            },
        };
    }
    catch (error) {
        console.log(error);
        return {
            props: {
                users: []
            },
        }
    }
}

export default AdminUsers; 