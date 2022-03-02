import React from "react"

function CreateUserForm() {
    const [values, setValues] = React.useState({}); 

    const onChange = (event: React.SyntheticEvent) => {
        event.persist();
        const target = event.target as HTMLInputElement;

        setValues(values => ({...values, [target.name]: target.value}));
    }
    const submit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (!values.name || !values.email || !values.phone) {
            alert("Please fill out all fields");
            return;
        }
        console.log(JSON.stringify(values));
        // const res = await fetch('/api/filter', {
        //   body: JSON.stringify(values),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   method: 'POST'
        // })
    
        // const result = await res.json()
        
    }
    return(
        <form name="CreateUserForm">            
            <label>Name </label>
            <input name="name" value={values.name || null} onChange={onChange}/> <br></br>
            <label>Email </label>
            <input name="email" value={values.email || null} onChange={onChange}/> <br></br> 
            <label>Phone Number </label>
            <input name="phone" value={values.phone || null} onChange={onChange}/> <br></br>
            <label>Role </label>
            <select name="role" onChange={onChange} value={values.role || ""}>
                <option value="NormalUser">Normal User</option>
                <option value="VolunteerForrester">Volunteer Forrester</option>
                <option value="SuperAdmin">Super Admin</option>
            </select><br></br>
            <input name="submit" type="submit" onClick={submit}/>
        </form>
    );
}


export default CreateUserForm;