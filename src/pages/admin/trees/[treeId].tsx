import { NextPage, NextPageContext } from "next";
import { Tree } from "utils/types";
import React from "react";
import { getTree } from "server/actions/Tree";
import UpsertTreeForm from "src/components/UpsertTreeForm";
import TreeEntryForm from "src/components/TreeEntryForm";
import { getTreeEntries } from "server/actions/Contentful";

interface Props {
    tree: Tree,
}

const AdminEdit: NextPage<Props> = ({ tree }) => {
    return (
    <div>
        <head>
            <title>Admin Edit | Trees Knoxville</title>
        </head>
        <h1>Admin Edit Page</h1>
        <UpsertTreeForm upsertTree={tree} />
        <TreeEntryForm tree={tree}/>
    </div>
    );
}


export async function getServerSideProps(context: NextPageContext) {
    try {

        // get treeId from url by using context
        const treeId = context.query.treeId as string;

        // this func is run on server-side, so we can safely fetch the event directly
        const tree: Tree = await getTree({ _id: treeId });
        const tree2: Tree = JSON.parse(JSON.stringify(tree)); // mongo objects are immutable, so make a copy
        
        tree2.entries = await getTreeEntries(tree2);

        return {
            props: {
                tree: JSON.parse(JSON.stringify(tree2)) as Tree,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

export default AdminEdit; 