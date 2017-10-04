import React, { Component } from 'react';
import ActiveGoals from './ActiveGoals';
import CompletedGoals from './CompletedGoals';
import SelectedGoal from './SelectedGoal';
import GuruLevel from './GuruLevel';


class Row2 extends Component {
    render(){
      return(
        <div className="row main-2">
          <div className="container">
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
        </div>
      );
    }

}


export default Row2;
