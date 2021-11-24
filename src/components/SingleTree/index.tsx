import { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { Tree } from "utils/types";

interface Props {
    tree: Tree,
}

const SingleTree: NextPage<Props> = ({ tree }) => {

    return (
        <div>
            <span>{tree.species}</span>
        </div>
    );
}

export default SingleTree