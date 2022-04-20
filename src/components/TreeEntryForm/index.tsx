import React from "react";


const TreeEntryForm = () => {

    const [entryText, setEntryText] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleEntryChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
    };

    return (
        <div>
            <span>Tree Update</span>
            <form onSubmit={handleSubmit}>
                <textarea name="paragraph_text" Cols="50" Rows="10" onChange={handleEntryChange}></textarea>
                <input name="texty" type="submit" value="Submit"></input>
            </form>
            
        </div>
    );
}


export default TreeEntryForm;