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
                id: new Date().toString(),
                user_name: "PLACEHOLDER USER",
                entry_date: new Date(),
                entry_text: entryText,
            }

            await fetch(urls.api.entries.treeEntry(tree._id as string), {
                method: "POST",
                body: JSON.stringify(entry),
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