import api from '../api';

const { add } = api.activities;

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



