import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import {startDeleteActivity} from '../../actions/Activity'

// PropTypes
// actions: PropTypes.object
//


const ActivityListItem = (props) => {
  const deleteClick = () => {
    props.dispatch(startDeleteActivity(props.action._id));
  }

  return (
    <>
      <Link  to={`/edit/${props.action._id}`}>
        <h3>{props.action.activity}</h3>
      </Link>

      <p>Mood: {props.action.mood}</p>
      <p>Energy: {props.action.Energy}</p>
      <p>Clarity of Thought: {props.action.clarity}</p>
      <p>Pain: {props.action.pain}</p>
      <p>Description: {props.action.description}</p>
      <button onClick={deleteClick}>Delete</button>
    </>
  )
}

ActivityListItem.prototype = {
  action: PropTypes.object
}


export default connect()(ActivityListItem);