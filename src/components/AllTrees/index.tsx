import React, { useRef, useEffect } from "react";
import { getTreesByVisibilityStatus } from "server/actions/Tree";
import { Tree } from "utils/types";
import urls from "utils/urls";



const AllTrees = () => {

    const [allTrees, setAllTrees] = React.useState<Tree[]>([]);


    useEffect(() => {
        const getAllTrees = async () => {
            const treesVis: Tree[] = await getTreesByVisibilityStatus(true);
            const treesInvis: Tree[] = await getTreesByVisibilityStatus(false);
            const allTrees = treesVis.concat(treesInvis);

            setAllTrees(allTrees);
        };
        void getAllTrees(); 
    });

    

    const renderTrees = async () => {
        
    

        allTrees.forEach((tree: Tree) => {
            return (
                <div>
                    <span>{tree._id}</span>
                    <br />
                </div>
            );
        });
        
    }

    return (
        <div>
            {renderTrees()}
        </div>
    )
}

export default AllTrees;