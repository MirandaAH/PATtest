import React, { Component } from 'react';

class SelectedGoal extends Component {
  render(){
    return(
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="">Selected Goal Progress/Goal History</a>
            </li>
          </ul>
        </div>
        <div className="card-block">
          <h4 className="card-title">Special title treatment</h4>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    );
  }
}


export default SelectedGoal;
