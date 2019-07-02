import React, { Component } from 'react';
import checkmark from '../assets/checkmark.svg';
class FooterNav extends Component {
  
  render() {
    return (
      <img className="pl-2 pr-2"src={checkmark} alt="checkmark"/>
    );
  }
}

export default FooterNav;
