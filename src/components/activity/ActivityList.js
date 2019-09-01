import React from 'react'
import { connect } from 'react-redux';


import ActivityListItem from './ActivityListItem';

// PropsTypes
// - activities prop derives from redux store


const ActivityList = (props) => {

  return (
    <>
    <h1>DashBoard List of Activities</h1>
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