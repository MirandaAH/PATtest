import React, { Component } from 'react';
import GoalTitleComp from './GoalTitleComp';
import SubGoalComp from './SubGoalComp';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")


class ActiveGoals extends Component {
  render() {
    return(
      <div className="col-lg-6 active-goals-section">
          <h3>Active Goals</h3>
          <hr />
          <a href=""><GoalTitleComp /></a>
      </div>
    );
  }
}

export default ActiveGoals;
