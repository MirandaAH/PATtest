import React, { Component } from 'react';
import Goals from './sub/Goals';
import GoalProgress from './sub/GoalProgress';

class Main extends Component {
  render(){
    return(
      <div className="row main-1">
        <Goals />
        <GoalProgress />
      </div>
    );
  }
}


export default Main;
