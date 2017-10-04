import React, { Component } from 'react';

class Goals extends Component {
  componentDidMount(){
    //Retrieve and display user's goals below
  }
  render(){
    return(
      <div className=" col-lg-3">
          <div className="goals text-center">
              <button type="button" className="btn btn-success">Add Goal</button>
              <div className="goal-container">
                  <div id="accordion" role="tablist" ariaMultiSelectable="true">
                      <div className="card">
                          <div className="card-header" role="tab" id="headingOne">
                              <p className="mb-0">
                                  <a dataToggle="collapse" dataParent="#accordion" href="#collapseOne" ariaExpanded="false" ariaControls="collapseOne">Goal One</a>
                              </p>
                          </div>
                          <div id="collapseOne" className="collapse" role="tabpanel" ariaLabelledby="headingOne">
                              <div className="card-block">
                                  <ul>
                                      <a href=""><li>SubGoal 1</li></a>
                                      <a href=""><li>SubGoal 2</li></a>
                                  </ul>
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

export default Goals;
