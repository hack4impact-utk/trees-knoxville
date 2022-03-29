import { User } from "utils/types";

/**
 * @returns all users in auth0
 */
 export const getUsers = async function() {
  const axios = require("axios").default;

  const options = {
    method: 'GET',
    url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users`,
    params: {q: 'name:*', search_engine: 'v3'},
    headers: {authorization: `Bearer ${process.env.AUTH0_MGMT_API_ACCESS_TOKEN}`}
  };

  const response = await axios.request(options);

  return response.data;
}

/**
 * @param id id of a user in auth0
 * @returns a single user
 */
export const getUser = async function(id: string) {
  const axios = require("axios").default;

  const options = {
    method: 'GET',
    url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${id}`,
    headers: {authorization: `Bearer ${process.env.AUTH0_MGMT_API_ACCESS_TOKEN}`}
  };

  const response = await axios.request(options);
  return response.data;
}

/**
 * @param updatedUser A user with updated fields
 */
export const updateUser = async function(updatedUser: User) {
  const axios = require("axios").default;

  const options = {
    method: 'PATCH',
    url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${updatedUser.user_id}`,
    headers: {authorization: `Bearer ${process.env.AUTH0_MGMT_API_ACCESS_TOKEN}`,
    'content-type': 'application/json',},
    
    data: {
      name: updatedUser.name,
      email: updatedUser.email,
      user_metadata: {
        phone: updatedUser.user_metadata!.phone || "",
        trees: updatedUser.user_metadata!.trees || [],
    },
    },
  };

  const response = await axios.request(options);
}

/**
 * @param user The user to insert into auth0
 */
export const addUser = async function(user: User) {

  // randomly generates a password
  const generator = require('generate-password');
  const userPassword = generator.generate({
                    length: 10,
                    numbers: true,
                    symbols: true,
                  });

  const axios = require("axios").default;

  const options = {
    method: 'POST',
    url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users`,
    headers: {authorization: `Bearer ${process.env.AUTH0_MGMT_API_ACCESS_TOKEN}`,
    'content-type': 'application/json',},
    
    data: {
      name: user.name,
      email: user.email,
      user_metadata: {
        phone: user.user_metadata!.phone || "",
        trees: user.user_metadata!.trees || [],
    },
    
      connection:"Username-Password-Authentication",
      password: userPassword,
    },
  };

  const response = await axios.request(options);
}

/**
 * @param email The email of the user to send the set password link to
 */
export const setUserPassword = async function(email: string) {
  var axios = require("axios").default;

  var options = {
    method: 'POST',
    url: `https://${process.env.AUTH0_DOMAIN}/dbconnections/change_password`,
    headers: {authorization: `Bearer ${process.env.AUTH0_MGMT_API_ACCESS_TOKEN}`,
    'content-type': 'application/json'},
    data: {
      email: email,
      connection: 'Username-Password-Authentication'
    }
  };
  
  const response = await axios.request(options);

  console.log('--------------------------------------------------------------');
  console.log(response);
}