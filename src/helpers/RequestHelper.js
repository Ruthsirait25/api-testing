const axios = require('axios');
const { baseURL } = require('../config/ConfigMaster');

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
});

module.exports = api;
