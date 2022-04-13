import React, { useState } from "react";
import { Tree } from "utils/types";
import { GetStaticPropsContext, NextPage } from "next";
import { getTrees } from "server/actions/Tree";
import TreeTable from "src/components/TreeTable";


interface stateInterface {
    filterType: string,
    minAge: number,
    maxAge: number,
    minDate: Date,
    maxDate: Date,
    speciesName: string,
}

interface Props {
    trees: Tree[],
}

const AdminTrees: NextPage<Props> = ({ trees }) => {

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "none") {
            // empty out those input containers!
        }

        values.filterType = e.target.value;
    };

    // maintains an array of all trees being displayed
    const [filterTrees, setFilterTrees] = useState(trees);
    const [values, setValues] = React.useState<stateInterface>({} as stateInterface);
    

    const addSpeciesFilter = (speciesName: string) => {
        // if there is a query (input field isn't blank), apply a filter. Otherwise, remove all filters
        if (speciesName) {
            setFilterTrees(trees.filter((tree) => speciesFilter(tree, speciesName)));
        }
        else {
            removeFilter();
        }
    }

    const addAgeFilter = (minAge: number, maxAge: number, speciesName: string) => {
        setFilterTrees(trees.filter((tree) => ageFilter(tree, minAge, maxAge, speciesName)));
    };

    const addDateFilter = (minDate: Date, maxDate: Date, speciesName: string) => {
        setFilterTrees(trees.filter((tree) => dateFilter(tree, minDate, maxDate, speciesName)));
    };

    const speciesFilter = (tree: Tree, speciesName: string) => {
        return tree?.species?.toLowerCase().indexOf(speciesName.toLowerCase()) !== -1;
    };

    const ageFilter = (tree: Tree, minAge: number, maxAge: number, speciesName: string) => {
        return tree?.age! >= minAge && tree?.age! <= maxAge && speciesFilter(tree, speciesName);
    };

    const dateFilter = (tree: Tree, minDate: Date, maxDate: Date, speciesName: string) => {
        // something with this date comparison...
        return new Date(tree?.datePlanted!) >= minDate && new Date(tree?.datePlanted!) <= maxDate && speciesFilter(tree, speciesName)
    };

    const removeFilter = () => {
        // trees[] holds all trees in the database, so this removes any filters
        setFilterTrees(trees);
    };


    const onChange = (event: React.SyntheticEvent) => {
        event.persist();
        const target = event.target as HTMLInputElement;
        setValues(values => ({...values, [target.name]: target.value}));
        
        
        
        if (values.filterType === "age") {
            if (target.name === "minAge") {
                addAgeFilter(Number(target.value), values.maxAge || 1000, values.speciesName);
            }
            else if (target.name === "maxAge") {
                addAgeFilter(values.minAge, Number(target.value) || 1000, values.speciesName);
            }
            else {
                addAgeFilter(values.minAge, values.maxAge || 1000, target.value);
            }
        }
        else if (values.filterType === "date") {
            if (target.name === "minDate") {
                addDateFilter(new Date(target.value) || 0, values.maxDate || new Date(), values.speciesName) ;
            }
            else if (target.name === "maxDate") {
                addDateFilter(values.minDate || 0, new Date(target.value) || new Date(), values.speciesName);
            }
            else {
                addDateFilter(values.minDate || 0, values.maxDate || new Date(), target.value);
            }
        }
        else {
            // species name changed, and no other filters should be applied
            addSpeciesFilter(target.value);
        }
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

            <input name="minAge" type="number" placeholder="start age" onChange={onChange}></input>
            <input name="maxAge" type="number" placeholder="end age" onChange={onChange}></input>

            <input type="date" onChange={onChange}></input>
            <input type="date" onChange={onChange}></input>
        </div>
        <div>
            <input name="speciesName" placeholder="Search by species name" onChange={onChange}></input>
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