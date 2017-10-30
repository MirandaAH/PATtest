import React, { Component } from 'react';

let ProgressBar = require("react-bootstrap/lib/ProgressBar")

class GoalLabel extends Component {
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
      const goalCompContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "right"
      }
      const progressBar = {
        margin: "auto",
        marginBottom: "8px",
        textAlign: "center",
        width: "95%",
        color: "white",
        backgroundColor: "#888",
        position: "relative",
        height: "30px"
      }
      const subGoalTitle= {
        color: "black"
      }
        return (
            <div className="row goal-comp-container" style={goalCompContainer}>
                <div className="goal-title col-lg-5">
                    <h4 className="sub-goal-title" style={subGoalTitle}>Goal #1 </h4>
                </div>
                <div className="goal-progress col-lg-6">
                    <ProgressBar style={progressBar} striped bsStyle="success" now={40} active/>
                </div>
            </div>
        );
    }
}

export default GoalLabel;
