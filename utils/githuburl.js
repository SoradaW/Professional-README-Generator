const axios = require('axios');

const gitHubURL = {
  async getUser(userResponses) {
    try { let response = await axios
        
      // Sample URL: https://github.com/SoradaW
      .get(`https://github.com/${userResponses}`);
        return response.data;

      } catch (error) {
        console.log(error);
    }
  }
};

module.exports = gitHubURL;
