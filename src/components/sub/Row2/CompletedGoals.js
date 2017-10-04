import React, { Component } from 'react';

class CompletedGoals extends Component {
  render(){
    return(
      <div class="col-lg-4">
          <div class="card completed-card">
              <div class="card-header completed-header">
                  <h4>Completed</h4>
              </div>
              <div class="card completed-list">
                  <div class="list-group">
                      <button type="button" class="list-group-item list-group-item-action">Completed 1<span class="badge badge-default badge-pill">Sub Goals: 3</span></button>
                      <button type="button" class="list-group-item list-group-item-action">Completed 2 <span class="badge badge-default badge-pill">Sub Goals: 2</span></button>
                      <button type="button" class="list-group-item list-group-item-action">Completed 3 <span class="badge badge-default badge-pill">Sub Goals: 3</span></button>
                      <button type="button" class="list-group-item list-group-item-action">Completed 4 <span class="badge badge-default badge-pill">Sub Goals: 5</span></button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}


export default CompletedGoals;
