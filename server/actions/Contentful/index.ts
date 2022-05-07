import { createClient } from "contentful-management";
import formidable from "formidable";
import fs from "fs";
import { ContentfulEntry, Tree } from "utils/types";
import { getTree, updateTree } from "../Tree";
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
        fs.unlinkSync(image.filepath);
        //The url is returned without the http/https, so it's added here.
        return { url: "https:" + asset.fields.file["en-US"].url, assetID: asset.sys.id };
    }
}

/**
 * @param treeEntry Tree Entry to be uploaded to Contentful.
 * @returns the ID of the entry created in contentful
 */
 export async function createTreeEntry(treeEntry: string) {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
    const entry = await environment.createEntry("treeEntry", {
        fields: {
            user: {
                "en-US": "test user", 
            },
            date: {
                "en-US": new Date(),
            },
            entry: {
                "en-US": treeEntry,
            },
        },
        
    });

    const response = await entry.publish();

    if (!entry) throw new Error("Error creating tree entry.");
    
    // returns the contentful ID of the newly created entry
    const entryId: string = response.sys.id;
    return entryId;
}

/**
 * @param entryId The ID of the entry in Contentful.
 * @returns the entry from contentful
 */
export async function getTreeEntry(entryId: string) {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
    const r = await environment.getEntry(entryId);

    const entry: ContentfulEntry = {
        id: r.sys.id,
        user_name: r.fields.user["en-US"],
        entry_date: r.fields.date["en-US"],
        entry_text: r.fields.entry["en-US"],
    };

    return entry;
}

/**
 * @param entryId the ID of the entry to be deleted in Contentful
 * @param tree    the tree that the entry is being removed from
 */
export async function deleteEntryByID(entryId: string, tree: Tree) {
    // removes the entry from contentful
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
    const entry = await environment.getEntry(entryId);
    await entry.unpublish();
    await entry.delete();

    // removes the entry Id from mongoDB
    if (tree.entryIds) {
        const index = tree.entryIds.indexOf(entryId);
        tree.entryIds.splice(index, 1);
        await updateTree({ _id: tree._id }, tree);
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
