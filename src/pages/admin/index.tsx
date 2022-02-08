import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "src/components/Profile/Profile";
import LogoutButton from "src/components/LogoutButton";


export default function Admin() {
    return (
    <div>
        <head>
            <title>Admin | Trees Knoxville</title>
        </head>
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_REACT_APP_AUTH0_CLIENT_ID}
            redirectUri="http://localhost:3000/admin"> 
            <LogoutButton> </LogoutButton>
       
       <h1>Admin Home Page</h1>
        <Profile></Profile>
        </Auth0Provider>
        
    </div>
    );
}