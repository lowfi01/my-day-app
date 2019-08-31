const axios = require('axios');

// reference playground / apiObjectFunctions.js for testing of this.
export default {
  activities: {
    add: async (activity) => {
      // axios.post(`http://localhost:3000/api/activity`, {...activity}).then( res => res.data.activity ).catch(e => console.log(e))
      try {
        const addActivity = await axios.post(`/api/activity`, {...activity});
        return addActivity;  // returns promise
      } catch (e) {
        console.log("Add activity axios error: ", e);
      }
    },
    get: async () => {
      try {
        const getActitivities = await axios.get(`/api/activity`);
        return getActitivities;
      } catch (error) {
        console.log("Get activities axios error: ", error);
      }
    }
  }
}