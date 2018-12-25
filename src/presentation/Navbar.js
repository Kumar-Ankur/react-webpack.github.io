import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__text">
          <Link to="/findFalcone">
            <a href="#" className="navbar__text--separator btn btn--animated btn--white">
              Reset
            </a>
          </Link>
          
          <Link to="/">
            <a href="#" className="navbar__text--separator btn btn--animated btn--white">
              GeekTrust Home
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;