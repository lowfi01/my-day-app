// #TODO
// - add date to activity default data
// - add edit action
// - add remove action

// const activityDefaultState = [{
//     _id: "1",
//     activity: "Sleeping",
//     mood: "happy",
//     pain: '5',
//     energy: '5',
//     clarity: '3',
//     description: 'Sleeping - actually this is just random description text im using for the default state data',
//     date: "2019-08-26T17:35:00.796Z"
//   }]

const activityReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [...state, action.activity];
    case 'GET_ACTIVITY':
      return [...state, ...action.activities];
    case 'EDIT_ACTIVITY':
      return state.map((activityObject) => {
        if(activityObject._id === action.activity._id){
          return {
            ...activityObject,
            ...action.activity
          }
        }
        return activityObject;
      })
    case 'DELETE_ACTIVITY':
        return state.filter((activityObject) => activityObject._id !== action.id);
    default:
        return state;
  }
}

export default activityReducer;