import React, { Component } from 'react';

let Button = require("react-bootstrap/lib/Button");
let Panel = require("react-bootstrap/lib/Panel");
let Accordion = require("react-bootstrap/lib/Accordion")
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class GoalProgress extends Component {
    render() {
        return (
            <div className="col-lg-7">
                <div className="goal-progress text-center">
<<<<<<< HEAD
                    <ButtonToolbar>
                        <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"></i> Add Progress</Button>
=======
                    <ButtonToolbar> 
                        <Button bsStyle="success" bsSize="large">Add Progress</Button>
>>>>>>> lgb work
                    </ButtonToolbar>
                    <hr />
                    <div className="goal-container">
                        <div className="card">
                            <div className="card-block">
                                <p>Date</p>
                                <hr />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default GoalProgress;
