// #TODO
// - add date to activity default data
// - add edit action
// - add remove action

const activityDefaultState = [{
    _id: "1",
    activity: "Sleeping",
    mood: "Sleepy",
    pain: 5,
    description: 'some random textfor default state',
    date: "2019-08-26T17:35:00.796Z"
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