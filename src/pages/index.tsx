import React from "react";
import UpsertTreeForm from "src/components/UpsertTreeForm";
import MapContainer from "src/components/Map";
import { GetStaticPropsContext, NextPage } from "next";
import { Tree } from "utils/types";
import { getTreesByVisibilityStatus } from "server/actions/Tree";
import  Filter  from "src/components/Filter";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "src/components/LoginButton";
import LogoutButton from "src/components/LogoutButton";
import Profile from "src/components/Profile/Profile";

interface Props {
    trees: Tree[],
}


const HomePage: NextPage<Props> = ({ trees }) => {

    return (
    <div> 
        <head>
            <title>Map | Trees Knoxville</title>
        </head>
        <h1>Welcome to Trees Knoxville!</h1>
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_REACT_APP_AUTH0_CLIENT_ID}
            redirectUri="http://localhost:3000/admin"> 
            <LoginButton> </LoginButton>
            <LogoutButton> </LogoutButton>
        </Auth0Provider>
        <Filter/>
        <div>
            <MapContainer trees={trees} />
            <br /><br />
            <UpsertTreeForm />
        </div>  
        
    </div>

    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        // only puts published trees on the map
        const trees: Tree[] = await getTreesByVisibilityStatus(true);
        
        return {
            props: {
                trees: (JSON.parse(JSON.stringify(trees))) as Tree[],
            },
        };
    }
    catch (error) {
        console.log(error);
        return {
            props: {
                trees: []
            },
        }
    }
}

export default HomePage;