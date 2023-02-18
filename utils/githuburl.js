const axios = require('axios');

const gitHubLink = {
  async getUser(userResponses) {
    try { let response = await axios
        
      // Ex. API: https://api.github.com/users/SoradaW
      .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
    }
  }
};

module.exports = gitHubLink;
