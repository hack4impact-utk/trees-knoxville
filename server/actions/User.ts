import mongoDB from "server/index";
import TreeSchema from "server/models/Tree";
import { Types } from "mongoose";
import { Tree } from "utils/types";
import TreeModel from "server/models/Tree";


/**
 * @returns all users in auth0
 */
 export const getUsers = async function() {
    

   try {
    var axios = require("axios").default;

    var options = {
      method: 'POST',
      url: `https://${process.env.AUTH0_DOMAIN}/api/v2/jobs/users-exports`,
      headers: {
        authorization: `Bearer ${process.env.AUTO0_MGMT_API_ACCESS_TOKEN}`,
        'content-type': 'application/json'
      },
      data: {
        connection_id: `${process.env.AUTH0_CONNECTION_ID}`,
        format: 'json',
        limit: 5,
        fields: [{name: 'email'}, {name: 'user_metadata.consent'}]
      }
    };
    
    axios.request(options).then(function (response: { data: []; }) {
      console.log(response.data);
      const users = response.data;

      return users;
    });
   }
   catch (error) {
       console.error(error);
   }

}