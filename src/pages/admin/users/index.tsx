import React from "react";
import { GetStaticPropsContext, NextPage } from "next";
import UserTable from "src/components/UserTable";
import { getUsers } from "server/actions/User";
import AdminNavigation from "src/components/AdminNavigation";
interface Props {
    users: [],
}

const AdminUsers: NextPage<Props> = ({ users }) => {

    return (
    <AdminNavigation>    
        <head>
            <title>Admin Trees | Trees Knoxville</title>
        </head>
        <h1>Admin Users Page</h1>
        
        <div>
            <UserTable users={users}/>
        </div>
    </AdminNavigation>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    try {

        const users = await getUsers();
        
        if (!users) {
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
