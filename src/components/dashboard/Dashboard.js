import React from 'react';


import AddActivity from '../activity/AddActivity'
import ActivityList from '../activity/ActivityList'

const Dashboard = () => {
  return (
    <div>
      <AddActivity />
      <ActivityList />
    </div>
  )
}

export default Dashboard;