import React, { Component } from 'react';
import GoalTitleComp from './GoalTitleComp';
import SubGoalComp from './SubGoalComp';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")


class Goals extends Component {
    componentDidMount() {
        //Retrieve and display user's goals below
    }
    render() {
        return (
            <div className="col-lg-4">
                <div className="goals text-center">
                    <ButtonToolbar>
                        <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"> </i> Add Goal</Button>
                    </ButtonToolbar>
                    <hr />
                    <GoalTitleComp />
                    <SubGoalComp />
                </div>
            </div>
        );
    }
}

export default Goals;
