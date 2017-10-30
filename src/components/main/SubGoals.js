import React, { Component } from 'react';
import GoalLabel from './GoalLabel';

let Panel = require("react-bootstrap/lib/Panel");
let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar");


class SubGoals extends Component {
    componentDidMount() {
        //Retrieve and display user's goals below
    }

    render() {
      const mainSubgoal = {
        marginBottom: "12px"
      }
        return (
            <Panel className="main-subgoal-panel"  style={mainSubgoal} collapsible expanded={this.props.expanded}>
                <a href=""><GoalLabel /></a>
                <ButtonToolbar>
                    <Button bsStyle="success" bsSize="small"><i class="fa fa-plus" aria-hidden="true"> </i> Add Sub-Goal</Button>
                </ButtonToolbar>
            </Panel>
        );
    }
}

export default SubGoals;
