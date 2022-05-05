import React from "react";
import { getTree, updateTree } from "server/actions/Tree";
import { Tree } from "utils/types";
import urls from "utils/urls";

interface Props {
    tree: Tree,
}

const TreeEntryForm: React.FC<Props> = ({ tree }) => {

    const [entryText, setEntryText] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (entryText) {
            const r = await fetch(urls.api.contentful.index, {
                method: "POST",
                body: entryText, 
            }); 
            const data = await r.json();
            const entryId = data.entryId;
            
            // if there are no entries for a tree, create an array. Otherwise, push onto it
            if (tree.entryIds?.length == 0) {
                tree.entryIds = [];
                tree.entryIds.push(entryId);
            }
            else {
                tree.entryIds?.push(entryId);
            }

            // updates the tree in mongo
            const fd = new FormData();
            let key: string;
            let key2: string;
            for (key in tree) {
                if (typeof tree[key] === "string") {
                    fd.append(key, tree[key] as string);
                }
                else if (key === "coordinates") {
                    for (key2 in tree[key]) {
                        fd.append(key2, tree[key][key2] as string);
                    }
                }
                else {
                    fd.append(key, tree[key] as Blob);
                }
            }
            
            const response = await fetch(urls.api.trees.updateTree(tree._id as string), {
                method: "PUT",
                body: fd,
            });
        }
    };

    const handleEntryChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setEntryText(target.value);
    };

    return (
        <div>
            <span>Tree Update</span>
            <form onSubmit={handleSubmit}>
                <textarea name="paragraph_text" cols="50" Rows="10" onChange={handleEntryChange}></textarea>
                <input type="submit" value="Submit"></input>
            </form>
            
        </div>
    );
}


export default TreeEntryForm;