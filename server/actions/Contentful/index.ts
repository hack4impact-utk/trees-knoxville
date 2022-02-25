import { createClient } from "contentful-management";
import formidable from "formidable";
import fs from "fs";
//Code comes directly from https://github.com/hack4impact-utk/mindversity-website/blob/develop/server/actions/Contentful.ts
const client = createClient({
    accessToken: process.env.CONTENTFUL_PERSONAL_TOKEN as string,
});


/**
 * @param image Image file of type Formidable.File to be uploaded.
 * @returns An object containing the uploaded image's asset ID and url.
 * @throws  Error if resource creation is unsuccessful
 */
export async function uploadImage(image: formidable.File) {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
    let asset = await environment.createAssetFromFiles({
        fields: {
            title: {
                "en-US": <string>image.originalFilename,
            },
            description: {
                //We don't really need this field, but it is required to publish
                "en-US": "Image description",
            },
            file: {
                "en-US": {
                    contentType: <string>image.mimetype,
                    fileName: <string>image.originalFilename,
                    file: fs.readFileSync(image.filepath),
                },
            },
        },
    });

    asset = await asset.processForAllLocales();
    asset = await asset.publish();

    if (!asset) {
        throw new Error("Asset creation unsuccessful.");
    } else {
        //Delete image from local storage before ending upload
        fs.unlinkSync(image.path);
        //The url is returned without the http/https, so it's added here.
        return { url: "https:" + asset.fields.file["en-US"].url, assetID: asset.sys.id };
    }
}

/**
 * @param ID ID of the Contentful Asset to be deleted.
 */
export async function deleteAssetByID(ID: string) {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
    const asset = await environment.getAsset(ID);

    //Before an asset can be deleted, it has to be unpublished.
    await asset.unpublish();
    await asset.delete();
}
