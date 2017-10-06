import React, { Component } from 'react';
import ActiveGoals from './sub/ActiveGoals';
import CompletedGoals from './sub/CompletedGoals';
import SelectedGoal from './sub/SelectedGoal';




class Progress extends Component {
    render(){
      return(
          <div>
            <img src={'../Images/mountains.jpg'} className="mountains" alt="mountains" />
            <div className="row main-2">
              <div class="col-lg-12 progress-page">
                <div class="jumbotron">
                  <div class="row">
                    <ActiveGoals />
                    <CompletedGoals />
                  </div>
                    <SelectedGoal />
                </div>
              </div>
            </div>
          </div>


      );
    }

}


export default Progress;
