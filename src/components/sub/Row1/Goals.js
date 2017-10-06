import React, { Component } from 'react';

let Button = require("react-bootstrap/lib/Button");
let Panel = require("react-bootstrap/lib/Panel");
let Accordion = require("react-bootstrap/lib/Accordion")
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class Goals extends Component {
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

            <div className="col-lg-4">
                <div className="goals text-center">
                    <ButtonToolbar>
                        <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"> </i> Add Goal</Button>
                    </ButtonToolbar>
                    <hr/>
                    <div className="goal-container">
                        <Accordion>
                            <Panel header="Goal 1" eventKey="1">
                                Subgoal Buttons
                            </Panel>
                            <Panel header="Collapsible Group Item #2" eventKey="2">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </Panel>
                            <Panel header="Collapsible Group Item #3" eventKey="3">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </Panel>
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goals;
