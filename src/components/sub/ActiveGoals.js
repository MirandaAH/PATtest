import React, { Component } from 'react';
import GoalTitleComp from './GoalTitleComp';




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
