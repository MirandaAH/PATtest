import React, { Component } from 'react';

let Panel = require("react-bootstrap/lib/Panel");


const title = (
    <h3>Completed Goals</h3>
);

class ProgressComp extends Component {
    render() {
        return (
            <div class="col-lg-4">
                <Panel header={title}>
                    <button type="button" class="list-group-item list-group-item-action">Completed 1<span class="badge badge-default badge-pill">Sub Goals: 3</span></button>
                </Panel>
            </div>
        );
    }
}


export default ProgressComp;
