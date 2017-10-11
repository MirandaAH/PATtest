import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Page from './components/Page';


class App extends Component {

  render() {

    const appStyle = {
      width: "100vw",
      overflowX: "hidden",
      fontSize: "1em",
      fontFamily: 'Palanquin Dark'
    }

    const bg = {
      position: 'fixed',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%'
    }
    const bgImg = {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: 'auto',
      minWidth: '50%',
      minHeight: '50%'
    }
    return (
      <Router>
        <div className="app" style={appStyle}>
          <div style={bg}>
            <img alt="bg" style={bgImg}src={'./Images/mountains.jpg'} />
          </div>
          <div className="app-header">
            <Nav />
          </div>
            <div className="row">
              <Page />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;


// <Router>
//   <div className="app-wrap">
//
//     <Navbar  />
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-sm-3" style={{backgroundColor: '#FFEBCD'}}>
//           <Options />
//         </div>
//         <div className="col-sm-9">
//           <Route exact path="/tasks" component={Tasks} />
//           <Route exact path="/me" component={Me} />
//           <Route exact path="/logout" component={Logout} />
//         </div>
//       </div>
//     </div>
//
//   </div>
// </Router>
