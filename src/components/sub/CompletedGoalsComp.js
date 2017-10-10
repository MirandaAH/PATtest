import React, { Component } from 'react';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class ProgressComp extends Component {
    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle="success" className="list-group-item list-group-item-action" bsSize="small">Completed Goal 1<span class="badge badge-default badge-pill">Sub Goals: 3</span></Button>
            </ButtonToolbar>
        );
    }
}


export default ProgressComp;
