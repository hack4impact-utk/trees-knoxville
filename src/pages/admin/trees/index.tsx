import React from "react";
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