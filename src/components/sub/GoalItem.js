import React, { Component } from 'react';
import GoalTitleComp from './GoalTitleComp';
import SubGoalComp from './SubGoalComp';

class GoalItem extends Component {
    state = {
        expanded: false
    }

    componentDidMount() {
        //Retrieve and display user's goals below
    }
    expand = () => {
        this.setState({ expanded: !this.state.expanded })

    }
    render() {
        return (
            <div>
                <a onClick={this.expand}><GoalTitleComp /></a>
                <SubGoalComp expanded={this.state.expanded} />
            </div>
        );
    }
}

export default GoalItem;
