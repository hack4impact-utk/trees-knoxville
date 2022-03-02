import React from "react";
import Head from "next/head";
import MapContainer from "src/components/Map";
import HeaderBar from "src/components/HeaderBar"
import { GetStaticPropsContext, NextPage } from "next";
import { Tree } from "utils/types";
import { getTreesByVisibilityStatus } from "server/actions/Tree";

interface Props {
    trees: Tree[],
}


const HomePage: NextPage<Props> = ({ trees }) => {
	

    return (
    <main> 
    <Head>
        <title>Map | Trees Knoxville</title>
    </Head>
            <HeaderBar/> 
            <MapContainer trees={trees} /> 
    </main>
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
