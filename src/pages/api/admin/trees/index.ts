import { NextApiRequest, NextApiResponse } from "next";
import { Tree } from "utils/types"
import { addTree, getTrees } from "server/actions/Tree"
import formidable from "formidable";
import { uploadImage } from "server/actions/Contentful";

export const config = {
    api: {
        bodyParser: false,
    },
};

// @route   POST /api/events/admin/trees - Create a tree from form data
// @route   GET  /api/events/admin/trees - Returns all trees in the database, regardless of visibility status
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") { 
            const form = new formidable.IncomingForm();
            const id = req.query.treeId as string;

            form.parse(req, async (err: string, fields: formidable.Fields, files: formidable.Files) => {
                
                const updatedTree: Tree = {
                    species: fields.species,
                    age: fields.age,
                    coordinates: {
                        latitude: fields.latitude,
                        longitude: fields.longitude,
                    },
                    datePlanted: fields.datePlanted,
                    adopted: fields.adopted,
                    watering: fields.watering,
                    pruning: fields.pruning,
                    published: fields.published,   
                }
                
                // ensures coordinates are valid
                const numberLat = Number(updatedTree.coordinates?.latitude);
                const numberLong = Number(updatedTree.coordinates?.longitude);

                if (!numberLat ||  numberLat < -90 || numberLat > 90 ) {
                    throw Error ("Invalid Latitude");
                }
                if (!numberLong || numberLong < -180 || numberLong > 180) {
                    throw Error ("Invalid Longitude");
                }

                // uploads the image to contentful
                if (files.image) {
                    updatedTree.image = await uploadImage(files.image as formidable.File);
                }
                
                await addTree(updatedTree);
                
                res.status(200).json({
                    success: true,
                    payload: {}
                });
            });  
        }

        if (req.method === "GET") {
            const trees: Tree[] = await getTrees()

            res.status(200).json({
                success: true,
                payload: trees,
            });
        }       
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error,
        })
    }
}
