import React from "react";
import { Tree } from "utils/types";
import SingleTree from "src/components/SingleTree";
import { GetStaticPropsContext, NextPage } from "next";
import { getTrees } from "server/actions/Tree";
import urls from "utils/urls";
import TreeTable from "src/components/TreeTable";
import { MdOutlineSort, MdWatchLater } from "react-icons/md"

interface Props {
    trees: Tree[],
}

const AdminTrees: NextPage<Props> = ({ trees }) => {
    
    // reroutes to specific tree page
    const onClick = (treeId: string) => {
        window.location.replace(urls.pages.updateTree(treeId));
    };

    return (
    <div>    
        <head>
            <title>Admin Trees | Trees Knoxville</title>
        </head>
        <h1 className="hello">Admin Trees Page</h1>
        
        <div className="table">
            <div className="filterRow">
                <button className="filterButton"><MdOutlineSort className="icon"/>Filter by Most Recent</button>
                <button className="filterButton"><MdWatchLater className="icon"/>Past Week</button>
            </div>
            <TreeTable trees={trees}/>
        </div>
        <style jsx global>{`
            
            .filterRow {
                display: flex;
                justify-content: right;
            }
            
            .filterButton {
                display: flex;
                align-items: center;
                cursor: pointer;
                font-size: 20px;
                padding: 5px 10px 5px 10yapx;
                margin: 0 0 10px 20px;
                background-color: white;
                border: 0.5px solid #6F6F6F;
                box-sizing: border-box;
                box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
                border-radius: 5px;
            }

            .icon {
                padding-right: 4px;
                color: #219076;
            }

            .table {
                width: 720px;
            }
      `}</style> 
    </div>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const trees: Tree[] = await getTrees();
        
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

export default AdminTrees;