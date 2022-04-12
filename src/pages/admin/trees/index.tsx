import React, { useState } from "react";
import { Tree } from "utils/types";
import { GetStaticPropsContext, NextPage } from "next";
import { getTrees } from "server/actions/Tree";
import TreeTable from "src/components/TreeTable";

interface Props {
    trees: Tree[],
}

const AdminTrees: NextPage<Props> = ({ trees }) => {

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filterType = e.target.value;
        if (filterType === "age") {

        }
        else if (filterType === "date") {

        }
        // removes filter and clears age and date input fields
        else {

        }
    };

    // maintains an array of all trees being displayed
    const [filterTrees, setFilterTrees] = useState(trees);

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // applies a filter to trees[] based on the current value of the input box
        addFilter(e.target.value)
    }

    const addFilter = (query: string) => {
        // if there is a query (input field isn't blank), apply a filter. Otherwise, remove all filters
        if (query) {
            setFilterTrees(trees.filter((tree) => filter(tree, query)));
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
        return tree.species?.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }


    return (
    <div>    
        <head>
            <title>Admin Trees | Trees Knoxville</title>
        </head>
        <h1>Admin Trees Page</h1>
        <div>
            <select onChange={handleDropdownChange} name="filterType">
                <option value="none" selected>--- Filter by ---</option>
                <option value="age">Age</option>
                <option value="date">Date</option>
            </select>

            <input type="number" placeholder="start age"></input>
            <input type="number" placeholder="end age"></input>

            <input type="date"></input>
            <input type="date"></input>
        </div>
        <div>
            <input onChange={handleQueryChange} placeholder="Search by species name"></input>
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