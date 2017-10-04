import React, { Component } from 'react';

class GoalProgress extends Component {
  render(){
    return(
      <div className="col-lg-6">
          <div className="goal-progress text-center">
              <button type="button" className="btn btn-success">Add Progress</button>
              <div className="goal-container">
                  <div>
                      <div className="card">
                          <div className="card-block">
                              <p>Date</p>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                              </p>
                              <div className="text-right">
                                  <a href="/comments" className="card-link">Comments</a>
                                  <span>Likes</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}


export default GoalProgress;
