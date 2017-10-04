import React, { Component } from 'react';

class Social extends Component {
  render(){
    return(
      <div class="col-lg-3">
          <div class="card social">
              <div class="card-header">
                  Social
              </div>
              <div class="card">
                  <div class="card-block">
                      <p class="card-text">Eric liked your "Workout" progress!</p>
                      <span>Date</span>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Social;
