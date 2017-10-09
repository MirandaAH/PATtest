import React, { Component } from 'react';
import ProgressComp from './ProgressComp';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class GoalProgress extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <div className="goal-progress-container text-center">
                    <ButtonToolbar>
                        <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"></i> Add Progress</Button>
                    </ButtonToolbar>
                    <hr />
                    <ProgressComp />
                </div>
            </div>
        );
    }
}


export default GoalProgress;
