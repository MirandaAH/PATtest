import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Page from './components/Page';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">

          <img src={'../Images/mountains.jpg'} className="mountains" alt="mountains" />
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
