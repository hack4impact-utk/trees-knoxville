import { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { Tree } from "utils/types";

interface Props {
    tree: Tree,
}

const SingleTree: NextPage<Props> = ({ tree }) => {

    

    return (
        
        <div >
            <span>ObjectID={tree._id}</span><br/>
            <span>Species={tree.species}</span><br/>
            <span>Coordinates={tree.coordinates?.latitude}, {tree.coordinates?.longitude}</span><br/>
            <span>Adpoted={tree.adopted == true ? "true" : "false"}</span><br/>
            <span>Watering={tree.watering == true ? "true" : "false"}</span><br/>
            <span>Pruning={tree.pruning == true ? "true" : "false"}</span><br/>
            <span>Date Planted={tree.datePlanted?.toString().split("T")[0]}</span><br/>
            <span>published={tree.published == true ? "true" : "false"}</span><br/>
        </div>
  
    );
}

export default SingleTree