const activity = []

const activityReducer = (state = activity, action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [...state, action.activity];
    default:
        return state;
  }
}

export default activityReducer;