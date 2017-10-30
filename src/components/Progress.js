import React, { Component } from 'react';
import ActiveGoals from './progress/ActiveGoals';
import CompletedGoals from './progress/CompletedGoals';
import SelectedGoal from './progress/SelectedGoal';




class Progress extends Component {
    render(){
      const progressStyle = {
        width: "90%",
        margin: "auto",
        padding: "5px"
      }
      return(
        <div className="row">
          <div class="progress-page" style={progressStyle}>
            <div class="jumbotron">
              <div class="row">
                <ActiveGoals />
                <CompletedGoals />
              </div>
              <SelectedGoal />
            </div>
          </div>
        </div>
      );
    }
}


export default Progress;
