import React, { useRef, useState } from "react";
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

    // maintains an array of all trees being displayed
    const [filterTrees, setFilterTrees] = useState(trees);
    
    // holds all values that deal with what is being applied to the filter
    const [values, setValues] = React.useState<stateInterface>({} as stateInterface);

    // used to clear the input fields
    const minAgeInput  = useRef<HTMLInputElement>(null);
    const maxAgeInput  = useRef<HTMLInputElement>(null);
    const minDateInput = useRef<HTMLInputElement>(null);
    const maxDateInput = useRef<HTMLInputElement>(null);

    // handles changes in filter mode (filter by age, date, or neither). Called when the dropdown menu changes
    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "age") {
            // this condition will always evaluate to true, but is needed to suppress "Object is possibly null" warnings
            if (minDateInput.current && maxDateInput.current) {
                // clears date range inputs
                minDateInput.current.value = "";
                maxDateInput.current.value = "";
            }
            
            // sets min/max values for dates. Used when switching back to filtering by date
            values.minDate = new Date(0);
            values.maxDate = new Date();
        }
        if (e.target.value === "date") {
            if (minAgeInput.current && maxAgeInput.current) {
                // clears age range inputs
                minAgeInput.current.value = "";
                maxAgeInput.current.value = "";
            }

            // sets min/max values for ages. Used when switching back to filtering by age
            values.minAge = 0;
            values.maxAge = 999;
        }
        else {
            // clears age and date range inputs
            if (minDateInput.current && maxDateInput.current) {
                minDateInput.current.value = "";
                maxDateInput.current.value = "";
            }

            if (minAgeInput.current && maxAgeInput.current) {
                minAgeInput.current.value = "";
                maxAgeInput.current.value = "";
            }

            // sets min/max values for dates and ages. Used when switching back to filtering by date or age
            values.minDate = new Date(0);
            values.maxDate = new Date();
            values.minAge = 0;
            values.maxAge = 999;
        }

        // resets the filter
        addSpeciesFilter(values.speciesName);

        // updates the filter type (age, date, or none)
        values.filterType = e.target.value;
    };

    // called when any input field changes
    const onChange = (event: React.SyntheticEvent) => {
        event.persist();
        const target = event.target as HTMLInputElement;

        // if a date input was changed, convert it to a Date type
        if (target.name === "minDate" || target.name === "maxDate") {
            setValues(values => ({...values, [target.name]: new Date(target.value)}));
        }
        else {
            setValues(values => ({...values, [target.name]: target.value}));
        }
        
        /* Applies filters based on which dropdown option is selected and which field was changed.
         * With the state interface, the values are not available to use until the program leaves the
         * scope of the function, which is why different function calls must be made with target.value in
         * different locations. target.name represents which field was changed, target.value is its new value.
         * If a minimum value was changed, uses the existing maximum value and vice versa.
         * For each, if the max/min field is blank, uses the min/max value of that field instead. 
         * For example, if the minimum date was 4/10/2022 and no maximum date was set, all trees planted
         * on or after 4/10/2022 would be displayed.
        */
       
        if (values.filterType === "age") {
            if (target.name === "minAge") {
                // minimum age field changed
                addAgeFilter(Number(target.value), values.maxAge || 1000, values.speciesName);
            }
            else if (target.name === "maxAge") {
                // maximum age field changed
                addAgeFilter(values.minAge, Number(target.value) || 1000, values.speciesName);
            }
            else {
                // species name field changed
                addAgeFilter(values.minAge, values.maxAge || 1000, target.value);
            }
        }
        else if (values.filterType === "date") {
            // Date(0) represents a minimum date, Date() repsesents the current date (maximum date)
            if (target.name === "minDate") {
                // minimum date field changed
                addDateFilter(new Date(target.value), values.maxDate || new Date(), values.speciesName);
            }
            else if (target.name === "maxDate") {
                // maximum date field changed
                addDateFilter(values.minDate || new Date(0), new Date(target.value), values.speciesName);
            }
            else {
                // species name field changed
                addDateFilter(values.minDate || new Date(0), values.maxDate || new Date(), target.value);
            }
        }
        else {
            // species name changed, and no other filters should be applied
            addSpeciesFilter(target.value);
        }
    };

    /* These three functions apply a filter based on species, age, or date. If filtering by age
     * or date, the species filter is applied as well. If not, filters by only the species name */

    const addSpeciesFilter = (speciesName: string) => {
        // if there is a query (input field isn't blank), apply a filter. Otherwise, remove all filters
        if (speciesName) {
            setFilterTrees(trees.filter((tree) => speciesFilter(tree, speciesName)));
        }
        else {
            // trees[] holds all trees in the database, so this resets the filter
            setFilterTrees(trees);
        }
    }

    const addAgeFilter = (minAge: number, maxAge: number, speciesName: string) => {
        setFilterTrees(trees.filter((tree) => ageFilter(tree, minAge, maxAge, speciesName)));
    };

    const addDateFilter = (minDate: Date, maxDate: Date, speciesName: string) => {
        setFilterTrees(trees.filter((tree) => dateFilter(tree, minDate, maxDate, speciesName)));
    };

    // These three functions below are the filter functions used in the above three functions

    const speciesFilter = (tree: Tree, speciesName: string) => {
        // if the species input box is not blank, return true if there is a partial match
        if (speciesName) return tree?.species?.toLowerCase().indexOf(speciesName.toLowerCase()) !== -1;
        
        // if the species input box is blank, always return true (we want every species)
        else return true;
    };

    const ageFilter = (tree: Tree, minAge: number, maxAge: number, speciesName: string) => {
        // returns true if tree.age is between minAge and maxAge (inclusive) and there is a partial species name match
        return (tree?.age! >= minAge && 
                tree?.age! <= maxAge && 
                speciesFilter(tree, speciesName));
    };

    const dateFilter = (tree: Tree, minDate: Date, maxDate: Date, speciesName: string) => {
        // returns true if tree.datePlanted is between minDate and maxDate and there is a partial species name match
        return (new Date(tree?.datePlanted!) >= minDate && 
                new Date(tree?.datePlanted!) <= maxDate && 
                speciesFilter(tree, speciesName));
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

            {values.filterType === "age" &&
                <input name="minAge" type="number" placeholder="start age" onChange={onChange} ref={minAgeInput}/>
            }

            {values.filterType === "age" && 
                <input name="maxAge" type="number" placeholder="end age" onChange={onChange} ref={maxAgeInput}/>
            }

            {values.filterType === "date" &&
                <input name="minDate" type="date" onChange={onChange} ref={minDateInput}></input>
            }

            {values.filterType === "date" && 
                <input name="maxDate" type="date" onChange={onChange} ref={maxDateInput}></input>
            }
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