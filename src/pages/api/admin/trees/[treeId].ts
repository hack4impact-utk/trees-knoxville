import { NextApiRequest, NextApiResponse } from "next";
import { Tree } from "utils/types"
import { updateTree } from "server/actions/Tree"
import formidable from "formidable";
import { uploadImage } from "server/actions/Contentful";
export const config = {
    api: {
        bodyParser: false,
    },
};



// @route   PUT  /api/events/admin/trees/[treeId] - Updates a tree from form data
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        if (req.method === "PUT") {

            const form = new formidable.IncomingForm();
            const id = req.query.treeId as string;

            form.parse(req, async (err: string, fields: formidable.Fields, files: formidable.Files) => {
                
                

                const updateTree: Tree = {
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
                
                console.log(files.image)
                
                // ensures coordinates are valid
                const numberLat = Number(updateTree.coordinates?.latitude);
                const numberLong = Number(updateTree.coordinates?.longitude);

                if (!numberLat ||  numberLat < -90 || numberLat > 90 ) {
                    throw Error ("Invalid Latitude");
                }
                if (!numberLong || numberLong < -180 || numberLong > 180) {
                    throw Error ("Invalid Longitude");
                }

                // uploads the image to contentful
                if (files.image) {
                    updateTree.image = await uploadImage(files.image as formidable.File);
                }
                console.log(updateTree)
                

                res.status(200).json({
                    success: true,
                    payload: {}
                });
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