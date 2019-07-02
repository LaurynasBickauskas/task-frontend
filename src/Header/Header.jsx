import React, { Component } from 'react';
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'

class Header extends Component {
  
  render() {
    return (
      <div className="container pt-4">
        <div className="row pt-4">
            <HeaderLogo/>
            <HeaderNav/>
        </div>
      </div>
    );
  }
}

export default Header;
