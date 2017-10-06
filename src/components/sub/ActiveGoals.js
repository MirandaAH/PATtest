import React, { Component } from 'react';


class ActiveGoals extends Component {
  render() {
    return(
      <div className="col-lg-6 active-goals-section">
          <h1>Active Goals</h1>
          <hr />
          <div className="goal-progress-bars">
              <a href="">
                  <div className="progress">
                      <span className="progress-value">Exercise More</span>
                      <div className="progress-bar progress-bar-striped bg-success">
                      </div>
                  </div>
              </a>

              <a href="">
                  <div className="progress">
                      <span className="progress-value">Learn Javascript</span>
                      <div className="progress-bar progress-bar-striped bg-success">
                      </div>
                  </div>
              </a>
          </div>
      </div>
    );
  }
}

export default ActiveGoals;
