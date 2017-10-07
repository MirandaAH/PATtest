import React, { Component } from 'react';
import ActiveGoals from './sub/ActiveGoals';
import CompletedGoals from './sub/CompletedGoals';
import SelectedGoal from './sub/SelectedGoal';




class Progress extends Component {
    render(){
      return(
        <div className="row main-2">
          <div class="col-lg-12 progress-page">
            <div class="jumbotron">
              <div class="row">
                <ActiveGoals />
                <CompletedGoals />
                <GuruLevel />
              </div>
              <SelectedGoal />
            </div>
          </div>
        </div>
      );
    }
}


export default Progress;
