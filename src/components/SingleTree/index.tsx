import { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { Tree } from "utils/types";

interface Props {
    tree: Tree,
}

const SingleTree: NextPage<Props> = ({ tree }) => {

    return (
        <div>
            <span>ObjectID={tree._id}</span>
            <span>Species={tree.species}</span>
            <span>Coordinates={tree.coordinates?.latitude}, {tree.coordinates?.longitude}</span>
            <span>Adpoted={tree.adopted}</span>
            <span>Watering={tree.watering}</span>
            <span>Pruning={tree.pruning}</span>
            <span>Date Planted={tree.datePlanted}</span>
            <span>published={tree.published}</span>
        </div>
    );
}

export default SingleTree