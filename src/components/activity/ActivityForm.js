 // #TODO
    //  - improve form validation with regex checking


import React from 'react';
import PropTypes from 'prop-types';

// PropTypes
// - onSubmit - func.isRequired
// - activty - activity.Object


class ActivityForm extends React.Component{
  constructor(props){
    super(props)
    console.log(props.activity)
    this.state = {
      activity: props.activity ? props.activity.activity : '',
      mood: props.activity ? props.activity.mood : 'pleasent',
      description: props.activity ? props.activity.description : '',
      energy: props.activity ? props.activity.energy : '5',
      clarity: props.activity ? props.activity.clarity : '5',
      pain: props.activity ? props.activity.pain : '1',
      _id: props.activity ? props.activity._id : ''
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

  painChange = (e) => {
    let pain = e.target.value;
    this.setState(() => ({pain}));
  }


  clarityChange = (e) => {
    let clarity = e.target.value;
    this.setState(() => ({clarity}));
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

        <label htmlFor="activity-text">activity</label>
        <input
          id="activity"
          type="text"
          value={this.state.activity}
          onChange={this.activityChange}
          placeholder="Gym, Sleep, Meal, Class, Lecture ..."
        />

        <label htmlFor="clarity-select">clarity</label>
        <select
          id="clarity"
          type="text"
          value={this.state.clarity}
          onChange={this.clarityChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

        </select>

        <label htmlFor="pain-select">pain</label>
        <select
          id="pain-select"
          type="text"
          value={this.state.pain}
          onChange={this.painChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>


        <label htmlFor="energy-select">energy</label>
        <select
          id="energy-select"
          type="text"
          value={this.state.energy}
          onChange={this.energyChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>

        <label htmlFor="mood-select">mood</label>
        <select
          id="mood-select"
          type="text"
          value={this.state.mood}
          onChange={this.moodChange}
          >
            <option value="tense">tense</option>
            <option value="nervous">nervous</option>
            <option value="stressed">stressed</option>
            <option value="upset">upset</option>
            <option value="unpleasent">unpleasent</option>
            <option value="sad">sad</option>
            <option value="depressed">depressed</option>
            <option value="bored">bored</option>
            <option value="fatigued">fatigued</option>
            <option value="calm">calm</option>
            <option value="relaxed">relaxed</option>
            <option value="contented">contented</option>
            <option value="pleasent">pleasent</option>
            <option value="happy">happy</option>
            <option value="elated">elated</option>
            <option value="excited">excited</option>
            <option value="alert">alert</option>
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
  onSubmit: PropTypes.func.isRequired,
  activity: PropTypes.object
}


export default ActivityForm;