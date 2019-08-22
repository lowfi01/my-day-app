// #TODO
// - add date to activity default data
// - add edit action
// - add remove action

const activityDefaultState = [{
    type: "Sleeping",
    state: "Sleepy",
    pain: 5,
  }]

const activityReducer = (state = activityDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [...state, action.activity];
    default:
        return state;
  }
}

export default activityReducer;