import React from "react";
import { Entry, Tree } from "utils/types";
import urls from "utils/urls";

interface Props {
    tree: Tree,
}

const TreeEntryForm: React.FC<Props> = ({ tree }) => {

    const [entryText, setEntryText] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (entryText) {

            const entry: Entry = {
                id: entryText, // THIS IS A PLACEHOLDER. GENERATE OBJECTID HERE
                user_name: "PLACEHOLDER USER",
                entry_date: new Date(),
                entry_text: entryText,
            }
            
            // if there are no entries for a tree, create an array. Otherwise, push onto it
            if (!tree.entries) {
                tree.entries = [];
                tree.entries.push(entry);
            }
            else {
                tree.entries.push(entry);
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
                else if (key === "entries") {
                    fd.append(key, JSON.stringify(tree[key]))
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

    // removes a tree entry on click
    const deleteTreeEntry = async (entryId: string) => {
        await fetch(urls.api.entries.treeEntry(entryId), {
            method: "DELETE",
            body: JSON.stringify(tree),
        });
    }

    return (
        <div>
            <span>Tree Update</span><br></br>
            
            {tree.entries && tree.entries.map((entry: Entry) => {
                return (
                    <div key={entry.id} onClick={() => deleteTreeEntry(entry.id)} >
                        <span>{entry.user_name} at {entry.entry_date.toString()}:</span>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;{entry.entry_text}</p>
                    </div>
                );
            })}
            <form onSubmit={handleSubmit}>
                <textarea name="paragraph_text" cols="50" Rows="10" onChange={handleEntryChange}></textarea>
                <input type="submit" value="Submit"></input>
            </form>
            
        </div>
    );
}


export default TreeEntryForm;