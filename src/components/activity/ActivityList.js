import React from 'react'
import { connect } from 'react-redux';


import ActivityListItem from './ActivityListItem';

const ActivityList = (props) => {

  return (
    <>
      <p>Hello World!</p>
      {
        props.activities.map((action) => (
          <ActivityListItem key={action._id} action={action} />
        ))

      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    activities: state.activity
  }
}

export default connect(mapStateToProps)(ActivityList)