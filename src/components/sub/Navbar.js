import React, { Component } from 'react';

class Navbar extends Component {
 render(){
   return(
     <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent"
            ariaExpanded="false" ariaLabel="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
        <a className="navbar-brand" href="/">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/progress">Progress <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile <span className="sr-only"></span></a>
                </li>
            </ul>
        </div>
    </nav>

   );
 }
}


export default Navbar;
