import React from "react"

function Form() {
    const [values, setValues] = React.useState({}); 

    const onChange = (event: React.SyntheticEvent) => {
        event.persist();
        const target = event.target as HTMLInputElement;

        setValues(values => ({...values, [target.name]: target.value}));
    }
    const submit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
    
        const res = await fetch('/api/filter', {
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
    
        const result = await res.json()
        console.log(result.payload);
    }
    return(
        <form name="filterForm">
            <input name="age" value={values.age || null} onChange={onChange}/>
            <label>Age</label>
            <label>Species</label>
            <select name="species" onChange={onChange} value={values.species || ""}>
                <option value="">Tree Species</option>
                <option value="oak">Oak</option>
                <option value="birch">Birch</option>
                <option value="darkOak">Dark Oak</option>
                <option value="acacia">Acacia</option>
            </select>
            <input name="submit" type="submit" onClick={submit}/>
        </form>
    );
}

const Filter = () => {
    return (
        <div>
            <Form/>
        </div>
    );
};

export default Filter;