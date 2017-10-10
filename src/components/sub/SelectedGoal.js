import React, { Component } from 'react';

let Panel = require("react-bootstrap/lib/Panel");

const title = (
  <h3>Progress</h3>
);

class SelectedGoal extends Component {
  render(){
    return(
      <Panel header={title}>
      
    </Panel>
    );
  }
}


export default SelectedGoal;
