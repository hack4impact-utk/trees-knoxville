import { NextPage, NextPageContext } from "next";
import { ContentfulEntry, Tree } from "utils/types";
import React from "react";
import { getTree } from "server/actions/Tree";
import UpsertTreeForm from "src/components/UpsertTreeForm";
import TreeEntryForm from "src/components/TreeEntryForm";
import urls from "utils/urls";
import { getTreeEntry } from "server/actions/Contentful";

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
        
        if (tree.entryIds && tree.entryIds.length > 0) {
            const entryIds: string[] = tree.entryIds[0].split(',');
            
            tree.entries = [];

            // gets all entries from contentful and puts them in tree.entries
            await Promise.all(entryIds.map(async (entryId: string) => {
            const r = await getTreeEntry(entryId);
                const entry: ContentfulEntry = {
                    user_name: r.fields.user["en-US"],
                    entry_date: r.fields.date["en-US"],
                    entry_text: r.fields.entry["en-US"],
                };

                if (tree.entries) {
                    tree.entries.push(entry);
                }
            }));
        }
        
        console.log(tree.entries);
        console.log(tree);

        return {
            props: {
                tree: JSON.parse(JSON.stringify(tree)) as Tree,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

export default AdminEdit; 