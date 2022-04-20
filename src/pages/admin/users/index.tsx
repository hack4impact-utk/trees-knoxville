import React, { useState } from "react";
import { GetStaticPropsContext, NextPage } from "next";
import UserTable from "src/components/UserTable";
import { getUsers } from "server/actions/User";
import { User } from "utils/types";

interface Props {
    users: User[],
}

const AdminUsers: NextPage<Props> = ({ users }) => {

    // maintains an array of all users being displayed
    const [filterUsers, setFilterUsers] = useState(users);

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // applies a filter to users[] based on the current value of the input box
        addFilter(e.target.value)
    }

    const addFilter = (query: string) => {
        // if there is a query (input field isn't blank), apply a filter. Otherwise, remove all filters
        if (query) {
            setFilterUsers(users.filter((user) => filter(user, query)));
        }
        else {
            removeFilter();
        }
    }

    const filter = (user: User, query: string) => {
        return (user.name?.toLowerCase().indexOf(query.toLowerCase()) !== -1  ||
                user.email?.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
                user.user_metadata?.phone?.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }

    const removeFilter = () => {
        // users[] holds all trees in the database, so this removes any filters
        setFilterUsers(users);
    };

    return (
    <div>    
        <head>
            <title>Admin Trees | Trees Knoxville</title>
        </head>
        <h1>Admin Users Page</h1>
        
        <div>
            <input onChange={handleQueryChange} placeholder="Search"></input>
            <UserTable users={filterUsers}/>
        </div>
    </div>
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