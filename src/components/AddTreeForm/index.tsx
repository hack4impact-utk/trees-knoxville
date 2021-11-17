import React, { useRef } from "react";
import { Tree } from "utils/types";
import urls from "utils/urls";

const AddTreeForm = () => {

    const species = useRef<HTMLInputElement>(null);
    const age = useRef<HTMLInputElement>(null);
    const latitude = useRef<HTMLInputElement>(null);
    const longitude = useRef<HTMLInputElement>(null);
    const [adopted, setAdopted] = React.useState<boolean>(false);
    const [watering, setWatering] = React.useState<boolean>(false);
    const [pruning, setPruning] = React.useState<boolean>(false);

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
            adopted: adopted,
            watering: watering,
            pruning: pruning,
        }

        const r = await fetch(urls.api.trees, {
            method: "POST",
            body: JSON.stringify(tree),
        });  
    }

    const handleAdoptedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdopted(e.target.checked);
    };

    const handleWateringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWatering(e.target.checked);
    };

    const handlePruningChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPruning(e.target.checked);
    };

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
                <label htmlFor="adopted">Adopted</label>
                <input
                    type="checkbox"
                    name="adopted"
                    onChange={handleAdoptedChange}
                    placeholder="Adopted"
                    id="adoptedCheckbox"
                        />
                <label htmlFor="watering">Watering</label>
                <input
                    type="checkbox"
                    name="watering"
                    onChange={handleWateringChange}
                    placeholder="Watering"
                    id="wateringCheckbox"
                        />
                <label htmlFor="pruning">Pruning</label>
                <input
                    type="checkbox"
                    name="pruning"
                    onChange={handlePruningChange}
                    placeholder="Pruning"
                    id="pruningCheckbox"
                        />
                <input type="submit" value="Add Tree"></input>
            </form>
        </div>
    )
}

export default AddTreeForm;