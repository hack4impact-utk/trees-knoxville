import { UserContext } from "@auth0/nextjs-auth0";
import React, { useRef } from "react";
import { User } from "utils/types";
import urls from "utils/urls";

interface stateInterface {
    treeId?: string,
    name?: string,
    email?: string,
    phone?: string,
    // if a user is passed, this array will not be used since any new trees must be added to its existing array
    trees: string[],
}

interface Props {
    user?: User,
}

const UpdateUserForm: React.FC<Props> = ({ user }) => {

    const [values, setValues] = React.useState<stateInterface>({} as stateInterface);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // creates user object
        const newUser: User = {
            name: values.name || user?.name || "",
            email: values.email || user?.email || "",
            user_metadata: {
                phone: values.phone || (user?.user_metadata!.phone || ""),
                trees:  values.trees || user?.user_metadata!.trees || [],
            },
        }

        // if an existing user is being updated
        if (user) {
            // updates the user in auth0
            const r = await fetch(urls.api.users.user(user.user_id!), {
                method: "PATCH",
                body: JSON.stringify(newUser),
            });

            // redirects to adminUsers
            window.location.replace(urls.pages.adminUsers);
        }
        // if a new user is being added
        else {
            // creates the user in auth0
            const r = await fetch(urls.api.users.index, {
                method: "POST",
                body: JSON.stringify(newUser),
            });
        }
        

        
    }

    const handleAddTree = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // if the user currently has no metadata or trees, initialize an empty object/array
        if (user && (!user.user_metadata || !user.user_metadata.trees)) {
            user.user_metadata = {};
            user.user_metadata.trees = [];
        }
        
        // adds a tree to a user. Only updates in auth0 on submit
        if (user && values.treeId) {
            user.user_metadata!.trees!.push(values.treeId);
        }
        else if (values.treeId) {
            
            // if no trees have been added yet, initialize an empty array
            if (!values.trees) {
                values.trees = [];
            }
            values.trees.push(values.treeId);
        }
    }

    // removes tree [treeId] from the user. Only updates in auth0 on submit
    const deleteUserTree = (treeId: string) => {
        if (user) {
            const index = user.user_metadata!.trees!.indexOf(treeId);
            user.user_metadata!.trees!.splice(index, 1);
        }
        else {
            const index = values.trees.indexOf(treeId);
            values.trees!.splice(index, 1);
        }
    }
    

    // handles all states
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
                    name="name"
                    placeholder="Name"
                    required
                    onChange={onChange}
                    defaultValue= {user?.name || ""}
                    id="nameField"
                        />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    defaultValue= {user?.email || ""}
                    id="emailField"
                        />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={onChange}
                    defaultValue= {user?.user_metadata ?  user.user_metadata!.phone : ""}
                    id="phoneField"
                        />
                <input type="submit" value={user ? "Update User" : "Add User"}></input>
            </form>

            <form onSubmit={handleAddTree}>
                <input 
                type="text"
                name="treeId"
                placeholder="Tree ID"
                onChange={onChange}
                id="treeIdField"
                />
                <input type="submit" value="Add Tree" />
            </form>
            {user && <span>User's Trees: (Click to delete)</span>}
            {user?.user_metadata && user.user_metadata.trees && user.user_metadata.trees.map((treeId: string) => {
                return (
                    <div key={treeId} onClick={() => deleteUserTree(treeId)}>
                        <span>{treeId}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default UpdateUserForm;