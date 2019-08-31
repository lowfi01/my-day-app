import api from '../api';

const { add, get } = api.activities;

// use redux-thunk to add to db & fetch id
export const startAddActivity = (activity = {}) => {
  return async (dispatch, getState) => {
    try {
      const fetchedActivity = await add(activity);  // resolve promise
      dispatch(addActivity(fetchedActivity.data));
    } catch (error) {
      console.log("unable to resolve promise startAddActivity: ", error);
    }
  }
}

// push to redux store
export const addActivity = (activity) => ({
  type: 'ADD_ACTIVITY',
  activity
})


export const startGetActivities = () => {
  return async (dispatch, getState) => {
    try {
      const fetchedActivities = await get(); // resolve promise
      dispatch(getActivity(fetchedActivities.data));
      return true; // cancel out of loading screen
    } catch (error) {
      console.log("unable to resolve promise startGetActivities: ", error);
      return false; // loading screen if false
    }
  }
}


export const getActivity = (activities) => ({
  type: 'GET_ACTIVITY',
  activities
})

