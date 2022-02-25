import React from "react";
import UpsertTreeForm from "src/components/UpsertTreeForm";
import MapContainer from "src/components/Map";
import HeaderBar from "src/components/HeaderBar"
import { GetStaticPropsContext, NextPage } from "next";
import { Tree } from "utils/types";
import { getTreesByVisibilityStatus } from "server/actions/Tree";
import Filter  from "src/components/Filter";
import { UserProvider } from '@auth0/nextjs-auth0';
import AuthComponent from "src/components/Auth"; 

interface Props {
    trees: Tree[],
}


const HomePage: NextPage<Props> = ({ trees }) => {
	

    return (
    <UserProvider>
    <div> 
        <head>
            <title>Map | Trees Knoxville</title>
        </head>
        <div className="header">
            {/* <AuthComponent/> */}
            <HeaderBar/>
        </div>

	    
        <div>
            <MapContainer trees={trees} />
            <br /><br />
        </div>  
        
    </div>
    <style jsx>{`

    `}</style>

    <style>{`
        .header {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100vw;
        }
    `}</style>
    </UserProvider>
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
