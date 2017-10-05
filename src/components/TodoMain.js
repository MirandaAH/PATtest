import React, { Component } from 'react';
import Head from './sub/Head';
import Row1 from './sub/Row1/Row1';
import Row2 from './sub/Row2/Row2';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Goals: [],
      GoalProgress: "",
      ActiveGoals: [],
      CompletedGoals: [],
      SelectedGoal: ""
    }
  }
  componentDidMount() {
    console.log('Main mounted')
  }
  render() {
    return (
      <div>
        <img src={'./Images/mountains.jpg'} className="mountains" alt="background mountains" />
        <Head />
        <Row1 />
        <Row2 />
      </div>
    );
  }
}

export default Main;
