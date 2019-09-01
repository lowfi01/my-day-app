import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react'

import {startEditActivity, startDeleteActivity}  from '../../actions/Activity';

import ActivityForm from './ActivityForm';

// Proptypes
// activity: PropTypes.object
// editActivity - derives from reduxstore


const EditActivity = (props) => {
  const onSubmit = (activity) => {
    props.dispatch(startEditActivity(activity));
    props.history.push('/');
  }
  const deleteClick = () => {
    props.dispatch(startDeleteActivity(props.editActivity._id));
    props.history.push('/');
  }
  return (
    <>
      <ActivityForm
        onSubmit={onSubmit}
        activity={props.editActivity}
      />

    <button onClick={deleteClick}>Delete Activity</button>
    </>
  )
}

const mapStateToProps = (state, props) => ({
  editActivity: state.activity.find((act) => act._id === props.match.params.id)
})

EditActivity.prototype = {
  activity: PropTypes.object
}


export default connect(mapStateToProps)(EditActivity);