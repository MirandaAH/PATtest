import React, { Component } from 'react';
import GoalTitleComp from './GoalTitleComp';
import SubGoalComp from './SubGoalComp';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")


class Goals extends Component {
    state= {
        expanded: false
    }
    
    componentDidMount() {
        //Retrieve and display user's goals below
    }
    expand = () => {
        this.setState({expanded: !this.state.expanded})

    } 
    render() {
        return (
            <div className="col-lg-4">
                <div className="goals text-center">
                    {/* Create Unique Compenent */}
                    <ButtonToolbar>
                        <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"> </i> Add Goal</Button>
                    </ButtonToolbar>
                    <hr />
                    <div>
                        <a onClick={this.expand}><GoalTitleComp /></a>
                        <SubGoalComp expanded={this.state.expanded} className="main-subgoal-panel"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goals;
