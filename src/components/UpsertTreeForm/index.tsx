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
    publish?: boolean,
    datePlanted?: Date,
}

interface Props {
    upsertTree?: Tree,
}

const UpsertTreeForm: React.FC<Props> = ({ upsertTree }) => {

    const [values, setValues] = React.useState<stateInterface>({} as stateInterface);

    const [adopted, setAdopted] = React.useState(upsertTree ? upsertTree.adopted : false);
    const [watering, setWatering] = React.useState(upsertTree ? upsertTree.watering : false);
    const [pruning, setPruning] = React.useState(upsertTree ? upsertTree.pruning : false);
    const [published, setPublished] = React.useState(upsertTree ? upsertTree.published : false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // creates tree object
        const newTree: Tree = {
            species: values.species,
            age: values.age,
            coordinates: {
                latitude: values.latitude || upsertTree?.coordinates?.latitude,
                longitude: values.longitude || upsertTree?.coordinates?.longitude,
            },
            // defaults to current date
            datePlanted: values.datePlanted || new Date(Date.now()),
            adopted: adopted,
            watering: watering,
            pruning: pruning,
            published: published,
        }

        // if an existing tree is being updated
        if (upsertTree) {
            const r = await fetch(urls.api.trees.updateTree(upsertTree._id as string), {
                method: "PUT",
                body: JSON.stringify(newTree),
            });

            // redirects to adminTrees
            window.location.replace(urls.pages.adminTrees);
        }
        // if a new tree is being added
        else {
            const r = await fetch(urls.api.trees.index, {
                method: "POST",
                body: JSON.stringify(newTree),
            }); 
        }  
    }

    // handles all states except the checkboxes
    const onChange = (event: React.SyntheticEvent) => {
        event.persist();
        const target = event.target as HTMLInputElement;
        setValues(values => ({...values, [target.name]: target.value}));
    }

    // handles the checkbox states
    const handleAdopted   = () => { setAdopted(adopted => !adopted) }
    const handleWatering  = () => { setWatering(watering => !watering) }
    const handlePruning   = () => { setPruning(pruning => !pruning) }
    const handlePublished = () => { setPublished(published => !published) }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="species"
                    placeholder="Species"
                    required
                    onChange={onChange}
                    defaultValue={upsertTree ? upsertTree.species : ""}
                    id="speciesField"
                        />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    required
                    onChange={onChange}
                    defaultValue={upsertTree ? upsertTree.age : ""}
                    id="ageField"
                        />
                <input
                    type="text"
                    name="latitude"
                    placeholder="Latitude"
                    required
                    onChange={onChange}
                    defaultValue={upsertTree ? upsertTree.coordinates?.latitude : ""}
                    id="latitudeField"
                        />
                <input
                    type="text"
                    name="longitude"
                    placeholder="Longitude"
                    onChange={onChange}
                    required
                    defaultValue={upsertTree ? upsertTree.coordinates?.longitude : ""}
                    id="longitudeField"
                        />
                <input
                    type="date"
                    name="datePlanted"
                    onChange={onChange}
                    placeholder="Date Planted"
                    defaultValue={upsertTree ? upsertTree.datePlanted?.toString().split("T")[0] : ""}
                    id="datePlantedField"
                        />
                <label htmlFor="adopted">Adopted</label>
                <input
                    type="checkbox"
                    name="adopted"
                    onChange={handleAdopted}
                    placeholder="Adopted"
                    defaultChecked={upsertTree ? upsertTree.adopted : false}
                    id="adoptedCheckbox"
                        />
                <label htmlFor="watering">Watering</label>
                <input
                    type="checkbox"
                    name="watering"
                    onChange={handleWatering}
                    placeholder="Watering"
                    defaultChecked={upsertTree ? upsertTree.watering : false}
                    id="wateringCheckbox"
                        />
                <label htmlFor="pruning">Pruning</label>
                <input
                    type="checkbox"
                    name="pruning"
                    onChange={handlePruning}
                    placeholder="Pruning"
                    defaultChecked={upsertTree ? upsertTree.pruning : false}
                    id="pruningCheckbox"
                        />
                <label htmlFor="publish">Publish?</label>
                <input
                    type="checkbox"
                    name="publish"
                    onChange={handlePublished}
                    placeholder="Publish?"
                    id="publishCheckbox"
                    defaultChecked={upsertTree ? upsertTree.published : false}
                        />
                <input type="submit" value={upsertTree ? "Update Tree" : "Add Tree"}></input>
            </form>
        </div>
    )
}

export default UpsertTreeForm;