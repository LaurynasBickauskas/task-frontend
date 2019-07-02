import React, { Component } from 'react';
import logo from '../assets/logo.png'
class HeaderLogo extends Component {
  render() {
    console.log(logo);
    return (
        <div className="col-xl-5 col-lg-3 col-12">
            <img width={140} height={29} src={logo} alt="Hostinger"/>
        </div>
    );
  }
}

export default HeaderLogo;
