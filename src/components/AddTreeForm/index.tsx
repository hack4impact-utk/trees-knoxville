import React, { useRef } from "react";
import { Tree } from "utils/types";
import urls from "utils/urls";

interface stateInterface {
    species?: string,
    age?: number,
    latitude?: string,
    longitude?: string,
    adopted?: boolean,
    watering?: boolean,
    pruning?: boolean,
    datePlanted?: Date,
}

const AddTreeForm = () => {

    const [values, setValues] = React.useState<stateInterface>({} as stateInterface);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // creates tree object
        const tree: Tree = {
            species: values.species,
            age: values.age,
            coordinates: {
                latitude: values.latitude,
                longitude: values.longitude,
            },
            // defaults to current date
            datePlanted: values.datePlanted || new Date(Date.now()),
            adopted: values.adopted ? true : false,
            watering: values.watering ? true : false,
            pruning: values.pruning ? true : false,
        }

        const r = await fetch(urls.api.trees, {
            method: "POST",
            body: JSON.stringify(tree),
        });  
    }

    const onChange = (event: React.SyntheticEvent) => {
        event.persist();
        const target = event.target as HTMLInputElement;
        setValues(values => ({...values, [target.name]: target.value}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="species"
                    placeholder="Species"
                    required
                    id="speciesField"
                        />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    required
                    id="ageField"
                        />
                <input
                    type="text"
                    name="latitude"
                    placeholder="Latitude"
                    required
                    id="latitudeField"
                        />
                <input
                    type="text"
                    name="longitude"
                    placeholder="Longitude"
                    required
                    id="longitudeField"
                        />
                <input
                    type="date"
                    name="datePlanted"
                    onChange={onChange}
                    placeholder="Date Planted"
                    id="datePlantedField"
                        />
                <label htmlFor="adopted">Adopted</label>
                <input
                    type="checkbox"
                    name="adopted"
                    onChange={onChange}
                    placeholder="Adopted"
                    id="adoptedCheckbox"
                        />
                <label htmlFor="watering">Watering</label>
                <input
                    type="checkbox"
                    name="watering"
                    onChange={onChange}
                    placeholder="Watering"
                    id="wateringCheckbox"
                        />
                <label htmlFor="pruning">Pruning</label>
                <input
                    type="checkbox"
                    name="pruning"
                    onChange={onChange}
                    placeholder="Pruning"
                    id="pruningCheckbox"
                        />
                <input type="submit" value="Add Tree"></input>
            </form>
        </div>
    )
}

export default AddTreeForm;