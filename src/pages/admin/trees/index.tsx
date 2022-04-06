import React, { useState } from "react";
import { Tree } from "utils/types";
import SingleTree from "src/components/SingleTree";
import { GetStaticPropsContext, NextPage } from "next";
import { getTrees } from "server/actions/Tree";
import urls from "utils/urls";
import TreeTable from "src/components/TreeTable";

interface Props {
    trees: Tree[],
}

const AdminTrees: NextPage<Props> = ({ trees }) => {

    const [filterTrees, setFilterTrees] = useState(trees);

    
    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        addFilter(e.target.value)
    }
    
    const addFilter = (query: string) => {
        // if there is a query (input field isn't blank), apply a filter. Otherwise, remove all filters
        if (query) {
            setFilterTrees(trees.filter((tree) => filter(tree, query)))
        }
        else {
            removeFilter();
        }
    }

    const removeFilter = () => {
        // trees[] holds all trees in the database, so this removes any filters
        setFilterTrees(trees);
    };

    const filter = (tree: Tree, query: string) => {
        return tree.species?.toLowerCase().indexOf(query.toLowerCase()) !== -1
    }

    return (
    <div>    
        <head>
            <title>Admin Trees | Trees Knoxville</title>
        </head>
        <h1>Admin Trees Page</h1>
        
        <div>
            <input onChange={handleQueryChange} placeholder="Search"></input>
            <TreeTable trees={filterTrees}/>
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