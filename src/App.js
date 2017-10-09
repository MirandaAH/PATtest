import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Head from './components/sub/Head';
import Page from './components/Page';


class App extends Component {

  render() {
    return (
      <Router>
        <div class="app">
          
          <img src={'../Images/mountains.jpg'} className="mountains" alt="mountains" />
          <div class="app-header">
          <Head />
          </div>
          <div class="container">
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
