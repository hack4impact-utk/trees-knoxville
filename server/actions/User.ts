import mongoDB from "server/index";
import TreeSchema from "server/models/Tree";
import { Types } from "mongoose";
import { Tree } from "utils/types";
import TreeModel from "server/models/Tree";


/**
 * @returns all users in auth0
 */
 export const getUsers = async function() {
   
  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users`,
    params: {q: 'name:*', search_engine: 'v3'},
    headers: {authorization: `Bearer ${process.env.AUTH0_MGMT_API_ACCESS_TOKEN}`}
  };

  const response = await axios.request(options)
  return response.data;
}

/**
 * @param id id of a user in auth0
 * @returns a single user
 */
export const getUser = async function(id: string) {
  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${id}`,
    headers: {authorization: `Bearer ${process.env.AUTH0_MGMT_API_ACCESS_TOKEN}`}
  };

  const response = await axios.request(options)

  return response.data;
}