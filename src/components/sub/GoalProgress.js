import React, { Component } from 'react';
import ProgressComp from './ProgressComp';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class GoalProgress extends Component {
    render() {
        return (
            <div>
                <ProgressComp />
            </div>
        );
    }
}


export default GoalProgress;
