const axios = require("axios");
const { baseURL } = require("../config/ConfigMaster");

module.exports = {
  post: async (endpoint, data, headers = {}) => {
    try {
      const response = await axios.post(`${baseURL}${endpoint}`, data, { headers });
      return response;
    } catch (err) {
      return err.response;
    }
  },

  get: async (endpoint, headers = {}) => {
    try {
      const response = await axios.get(`${baseURL}${endpoint}`, { headers });
      return response;
    } catch (err) {
      return err.response;
    }
  },

  put: async (endpoint, data, headers = {}) => {
    try {
      const response = await axios.put(`${baseURL}${endpoint}`, data, { headers });
      return response;
    } catch (err) {
      return err.response;
    }
  },

  delete: async (endpoint, headers = {}) => {
    try {
      const response = await axios.delete(`${baseURL}${endpoint}`, { headers });
      return response;
    } catch (err) {
      return err.response;
    }
  }
};
