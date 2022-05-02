import React from "react";
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
            const r = await fetch(urls.api.contentful.treeEntry(tree._id as string), {
                method: "POST",
                body: entryText,
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