import React from 'react';
import { connect } from 'react-redux';

import ActivityForm from './ActivityForm';
import { addActivity } from '../../actions/Activity'

const AddActivity = (props) => {
  const onSubmit = (activty) => {
    props.dispatch(addActivity(activty));
  }

  return (
    <div>
      <ActivityForm onSubmit={onSubmit}/>
    </div>
  );
}

export default connect()(AddActivity);