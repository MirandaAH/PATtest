import React, { Component } from 'react';
import Goals from './Goals';
import GoalProgress from './GoalProgress';
import Social from './Social';

class Row1 extends Component {
  render(){
    return(
      <div className="container">
      <div className="row main-1">
        <Goals />
        <GoalProgress />
      </div>
      </div>
    );
  }
}


export default Row1;
