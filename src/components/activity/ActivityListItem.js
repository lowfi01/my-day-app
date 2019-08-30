import React from 'react';

const ActivityListItem = (props) => {
  return (
    <>
      <h3>{props.action.activity}</h3>
      <p>Mood: {props.action.mood}</p>
      <p>Pain: {props.action.pain}</p>
      <p>{props.action.description}</p>
    </>
  )
}

export default ActivityListItem;