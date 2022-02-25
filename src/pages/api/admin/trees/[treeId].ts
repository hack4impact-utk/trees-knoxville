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
                const tree: Tree = fields;

                // ensures coordinates are valid
                const numberLat = Number(tree.coordinates?.latitude);
                const numberLong = Number(tree.coordinates?.longitude);
                //FIXME
                console.log(numberLat);
                console.log(numberLong);
                if (!numberLat ||  numberLat < -90 || numberLat > 90 ) {
                    throw Error ("Invalid Latitude");
                }
                if (!numberLong || numberLong < -180 || numberLong > 180) {
                    throw Error ("Invalid Longitude");
                }

                // uploads the image to contentful
                if (files.image) {
                    tree.image = await uploadImage(files.image as formidable.File);
                }

                await updateTree({ _id: id }, tree);

                res.status(200).json({
                    success: true,
                    payload: {}
                });
            });

            //const tree: Tree = JSON.parse(req.body);

            
        }
        
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error,
        })
    }
}
