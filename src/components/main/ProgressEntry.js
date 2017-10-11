import React, { Component } from 'react';

let Panel = require("react-bootstrap/lib/Panel");


const title = (
  <h3>Progress Date</h3>
)


class ProgressEntry extends Component {
    render() {

      const panelStyle = {
        fontFamily: 'Mallanna',
        borderRadius: '5px',
        margin: 'auto',
        marginBottom: '10px',
        width: '95%',
        backgroundColor: 'white',
        borderColor: '#2ecc71',
        textAlign: 'left'
      }
        return (
            <Panel header={title} style={panelStyle}>
                Progress Content
            </Panel>
        );
    }
}


export default ProgressEntry;
