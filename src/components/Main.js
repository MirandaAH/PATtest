import React, { Component } from 'react';
import Goals from './sub/Goals';
import GoalProgress from './sub/GoalProgress';

class Main extends Component {
  render(){
    return(
        <div>
          <img src={'../Images/mountains.jpg'} className="mountains" alt="mountains" />
          <div className="row main-1">
            <Goals />
            <GoalProgress />
          </div>
        </div>
    );
  }
}


export default Main;
