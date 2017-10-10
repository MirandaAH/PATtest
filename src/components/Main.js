import React, { Component } from 'react';
import GoalItem from './sub/GoalItem';
import GoalProgress from './sub/GoalProgress';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class Main extends Component {
  render() {
    return (
      <div className="main-page-container">
        <img src={'../Images/mountains.jpg'} className="mountains" alt="mountains" />
        <div className="row main-1">
          <div className="col-lg-4">
            <div className="goals text-center">
              < ButtonToolbar >
                <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"> </i> Add Goal</Button>
              </ButtonToolbar >
              <hr />
              <GoalItem />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="goal-progress-container text-center">
              <ButtonToolbar>
                <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"></i> Add Progress</Button>
              </ButtonToolbar>
              <hr />
              <GoalProgress />
              <GoalProgress />
              <GoalProgress />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Main;
