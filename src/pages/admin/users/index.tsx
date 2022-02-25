import React from "react";
import { Tree } from "utils/types";
import SingleTree from "src/components/SingleTree";
import { GetStaticPropsContext, NextPage } from "next";
import { getTrees } from "server/actions/Tree";
import urls from "utils/urls";
import UserTable from "src/components/UserTable";

interface Props {
    users: [],
}

const AdminTrees: NextPage<Props> = ({ users }) => {

    // reroutes to specific tree page
    const onClick = (treeId: string) => {
        window.location.replace(urls.pages.updateTree(treeId));
    };

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

        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: 'https://YOUR_DOMAIN/api/v2/users',
        params: {q: 'email:"*@*"', search_engine: 'v3'},
        headers: {authorization: 'Bearer YOUR_MGMT_API_ACCESS_TOKEN'}
        };

        axios.request(options).then(function (response: { data: any; }) {
            const users = response.data;
        })

        const trees: Tree[] = await getTrees();

        return {
            props: {
                users: (JSON.parse(JSON.stringify(trees))) //as Tree[], this was previously on here
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

export default AdminTrees; 