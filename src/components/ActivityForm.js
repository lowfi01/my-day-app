import React from 'react';

class ActivityForm extends React.Component{
  state = {
    activity: ''
  }

  activityChange = (e) => {
    let activity = e.target.value;
    this.setState(() => (
      { activity: activity }
    ))
  }

  onSubmit = (e) => {
    e.preventDefault();

  }

  render(){
    return(
      <form
        className="form activity-form"
        onSubmit={this.onSubmit}
        >

        <input
          type="text"
          value={this.state.activity}
          onChange={this.activityChange}
          />

        <button
          className="submit-button"
          type="submit"
          >Submit</button>
      </form>
    )
  }
}

export default ActivityForm;