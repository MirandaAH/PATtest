import React, { Component } from 'react';
import GoalComponent from './main/GoalComponent';
import ProgressEntry from './main/ProgressEntry';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class Main extends Component {
  render() {
    const goalStyle = {
          backgroundColor: '#444',
          borderRadius: '5px',
          paddingBottom: '20px'
        }
        const mainStyle = {
          marginRight: '25px',
          marginLeft: '25px',
          marginBottom: '60px'
        }
        const btnStyle= {
          margin: "auto",
          marginTop: "40px",
          marginBottom: "20px",
          fontFamily: 'Palanquin Dark',
          boxShadow: "3px 3px 15px black"
        }
    return (
      <div className="main-page-container" style={mainStyle}>
        <form>
          <button style={btnStyle}className="btn btn-danger" type="submit" onClick={this.logOut}>Logout</button>
        </form>
        <div className="row main-1">
          <div className="col-lg-4">
            <div className="text-center" style={goalStyle}>
              <ButtonToolbar>
                <Button style={btnStyle} bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"> </i> Add Goal</Button>
              </ButtonToolbar >
              <hr />
              <GoalComponent />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="text-center" style={goalStyle}>
              <ButtonToolbar>
                <Button style={btnStyle} bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"></i> Add Progress</Button>
              </ButtonToolbar>
              <hr />
              <ProgressEntry />
              <ProgressEntry />
              <ProgressEntry />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Main;
