import React, { Component } from 'react';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class CompletedGoalsComp extends Component {
    render() {
      const btnStyle = {
        marginTop: "0px",
        marginBottom: "2px"
      }
        return (
            <ButtonToolbar>
                <Button style={btnStyle}bsStyle="success" className="list-group-item list-group-item-action" bsSize="small">Completed Goal 1<span class="badge badge-default badge-pill">Sub Goals: 3</span></Button>
            </ButtonToolbar>
        );
    }
}


export default CompletedGoalsComp;
