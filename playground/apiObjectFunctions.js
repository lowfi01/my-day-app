const axios = require('axios');

const api =  {
  activities: {
    add: async (activity) => {
      // axios.post(`http://localhost:3000/api/activity`, {...activity}).then( res => res.data.activity ).catch(e => console.log(e))
      try {
        const addActivity = await axios.post(`http://localhost:3000/api/activity`, {...activity});
        return addActivity;
      } catch (e) {
        console.log("ADD Error: ", e);
      }
    }
  }
}


// Testing API
// api.activities.add({
// 	"activity": "SENT FROM JAVASCRIPT USING ASYNC/AWAIT",
//     "description": "Hello World",
//     "mood": "sad",
//     "energy": "1",
//     "date": "2019-08-26T17:35:00.796Z"
// })