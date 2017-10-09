import React, { Component } from 'react';
import GoalTitleComp from './GoalTitleComp';

let Panel = require("react-bootstrap/lib/Panel");
let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")


class SubGoalComp extends Component {
    componentDidMount() {
        //Retrieve and display user's goals below
    }

    render() {
        return (
            <Panel collapsible expanded={false}>

                <a href=""><GoalTitleComp /></a>

                <ButtonToolbar>
                    <Button bsStyle="success" bsSize="small"><i class="fa fa-plus" aria-hidden="true"> </i> Add Sub-Goal</Button>
                </ButtonToolbar>
            </Panel>
        );
    }
}

export default SubGoalComp;