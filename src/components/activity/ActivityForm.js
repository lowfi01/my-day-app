 // #TODO
    //  - improve form validation with sql checking
    //  - imrpove form validation for checking moods
    //  - Add better mood choices
    //  - Add implementation for date / time either here or in redux actions?
    //  - implement


import React from 'react';
import PropTypes from 'prop-types';

// PropTypes
// - onSubmit - func.isRequired


class ActivityForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      activity: '',
      mood: 'normal',
      description: '',
      energy: ''
    }
  }


  activityChange = (e) => {
    let activity = e.target.value;
    this.setState(() => ({activity}));
  }

  moodChange = (e) => {
    let mood = e.target.value;
    this.setState(() => ({mood}));
  }

  descriptionChange = (e) => {
    let description = e.target.value;
    this.setState(() => ({description}));
  }


  energyChange = (e) => {
    let energy = e.target.value;
    this.setState(() => ({energy}));
  }

  onSubmit = (e) => {
    e.preventDefault();

    let { activity, mood, description } = this.state;
    let error = {};

    if( activity === '' ) {
      error.activty = 'activity must be a string not a number and cannot be left blank!';
    }

    if( description === '' ) {
      error.activty = 'activity must be a string not a number and cannot be left blank!';
    }

    // Mood currently filters nothing, as default is not longer empty string.
    if( mood === '' ) {
      error.activty = 'Select a mood!';
    }

    if( Object.keys(error).length === 0 ) {
      console.log("Hello")
      this.props.onSubmit({
        ...this.state,
        date: new Date()
      });
    } else {
      console.log(error)
    }


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
          placeholder="activity eg... Gym, Sleeping.."
          />

        <input
          type="text"
          value={this.state.energy}
          onChange={this.energyChange}
          placeholder="energy placeholder"
          />

        <select
          type="text"
          value={this.state.mood}
          onChange={this.moodChange}
          >
            <option value="exhausted">exhausted</option>
            <option value="tired">tired</option>
            <option value="normal">normal</option>
            <option value="sad">sad</option>
            <option value="depressed">despressed</option>
            <option value="happy">happy</option>
            <option value="joyess">joyess</option>
        </select>

        <textarea
          type="text"
          value={this.state.description}
          onChange={this.descriptionChange}
          placeholder="enter description of activity"
          >

        </textarea>

        <button
          className="submit-button"
          type="submit"
          >Submit</button>
      </form>
    )
  }
}

ActivityForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}


export default ActivityForm;