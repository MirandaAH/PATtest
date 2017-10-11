import React, { Component } from 'react';
import GoalLabel from '../main/GoalLabel';




class ActiveGoals extends Component {
  render() {
    const goalLabel = {
      textAlign: "left"
    }
    const activeGoals = {
      height: "400px"
    }
    return(
      <div className="col-lg-6 active-goals-section" style={activeGoals}>
          <h3>Active Goals</h3>
          <hr />
          <a href="" style={goalLabel}><GoalLabel /></a>
      </div>
    );
  }
}

export default ActiveGoals;
