import React, { Component } from 'react';

let ProgressBar = require("react-bootstrap/lib/ProgressBar")

class GoalTitleComp extends Component {
    componentDidMount() {
        //Retrieve and display user's goals below
    }
    constructor(...args) {
        super(...args);
        this.state = {
            open: false,
        };
    }
    render() {
        return (
            <div className="row goal-comp-container">
                <div class="goal-title col-lg-4">
                    <h4>Goal 1/Sub Goal</h4>
                </div>
                <div class="goal-progress col-lg-8">
                    <ProgressBar striped bsStyle="success" now={40} active/>
                </div>
            </div>
        );
    }
}

export default GoalTitleComp;