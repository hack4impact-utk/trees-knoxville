import React, { useRef } from "react";
import { Tree } from "utils/types";
import urls from "utils/urls";

interface stateInterface {
    adopted?: boolean,
    watering?: boolean,
    pruning?: boolean,
    datePlanted?: Date,
}

const AddTreeForm = () => {

    const [values, setValues] = React.useState<stateInterface>({} as stateInterface);

    const species = useRef<HTMLInputElement>(null);
    const age = useRef<HTMLInputElement>(null);
    const latitude = useRef<HTMLInputElement>(null);
    const longitude = useRef<HTMLInputElement>(null);
    const datePlanted = useRef<Date>(null);
    //const adopted = useRef<boolean>(null);
    /*
    const [adopted, setAdopted] = React.useState<boolean>(false);
    const [watering, setWatering] = React.useState<boolean>(false);
    const [pruning, setPruning] = React.useState<boolean>(false);
    */

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // creates tree object
        const tree: Tree = {
            species: species.current!.value,
            age: parseInt(age.current!.value),
            coordinates: {
                latitude: latitude.current!.value,
                longitude: longitude.current!.value,
            },
            datePlanted: datePlanted.current ||new Date(Date.now()),
            adopted: values.adopted,
            watering: values.watering,
            pruning: values.pruning,
        }

        const r = await fetch(urls.api.trees, {
            method: "POST",
            body: JSON.stringify(tree),
        });  
    }

    /*
    const handleAdoptedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdopted(e.target.checked);
    };

    const handleWateringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWatering(e.target.checked);
    };

    const handlePruningChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPruning(e.target.checked);
    };
    */
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
                    ref={species}
                    placeholder="Species"
                    required
                    id="speciesField"
                        />
                <input
                    type="text"
                    name="age"
                    ref={age}
                    placeholder="Age"
                    required
                    id="ageField"
                        />
                <input
                    type="text"
                    name="latitude"
                    ref={latitude}
                    placeholder="Latitude"
                    required
                    id="latitudeField"
                        />
                <input
                    type="text"
                    name="longitude"
                    ref={longitude}
                    placeholder="Longitude"
                    required
                    id="longitudeField"
                        />
                <input
                    type="date"
                    name="datePlanted"
                    onChange={onChange}
                    value={values.datePlanted || null}
                    placeholder="Date Planted"
                    id="datePlantedField"
                        />
                <label htmlFor="adopted">Adopted</label>
                <input
                    type="checkbox"
                    name="adopted"
                    onChange={onChange}
                    value={values.adopted || false}
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