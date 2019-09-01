import api from '../api';

const { add, get, edit, remove } = api.activities;

// #TODO -- EDIT ACITIVITY
export const startDeleteActivity = (id) => {
  return async (dispatch, getState) => {
    await remove(id);
    dispatch(deleteActivity(id));
  }
}

export const deleteActivity = (id) => ({
  type: "DELETE_ACTIVITY",
  id
})



export const startEditActivity = (activity = {}) => {
  return async (dispatch, getState) => {
    try {
      const editedActivity = await edit(activity);  // resolve promise
      dispatch(editActivity(editedActivity.data));  // result contains data object
    } catch (error) {
      console.log("unable to resolve promise startEditActivity: ", error);
    }
  }
}


// edit acitivity
export const editActivity = (activity) => {
  return {
    type: 'EDIT_ACTIVITY',
    activity
  }
}

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

