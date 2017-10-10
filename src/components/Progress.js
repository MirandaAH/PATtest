import React, { Component } from 'react';
import ActiveGoals from './sub/ActiveGoals';
import CompletedGoals from './sub/CompletedGoals';
import SelectedGoal from './sub/SelectedGoal';




class Progress extends Component {
    render(){
      return(
        <div className="row">
          <div class="progress-page">
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
