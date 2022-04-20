import React from "react";
import { createTreeEntry } from "server/actions/Contentful";


const TreeEntryForm = () => {

    const [entryText, setEntryText] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (entryText) {
            await createTreeEntry(entryText);
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
                <input name="texty" type="submit" value="Submit"></input>
            </form>
            
        </div>
    );
}


export default TreeEntryForm;