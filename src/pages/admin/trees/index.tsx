import React from "react";
import { Tree } from "utils/types";
import SingleTree from "src/components/SingleTree";
import { GetStaticPropsContext, NextPage } from "next";
import { getTrees } from "server/actions/Tree";
import urls from "utils/urls";
import TreeTable from "src/components/TreeTable";
import { MdOutlineSort, MdWatchLater } from "react-icons/md"

interface Props {
    trees: Tree[],
}

const AdminTrees: NextPage<Props> = ({ trees }) => {

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
            <TreeTable trees={trees}/>
        </div>
    </div>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const trees: Tree[] = await getTrees();

        return {
            props: {
                trees: (JSON.parse(JSON.stringify(trees))) as Tree[],
            },
        };
    }
    catch (error) {
        console.log(error);
        return {
            props: {
                trees: []
            },
        }
    }
}

export default AdminTrees; 