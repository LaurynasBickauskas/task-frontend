import React, { Component } from 'react';
import FooterItem from './FooterItem'

const footerLabels = ["Guaranteed 99.9% Uptime", "Superior Speed Performance", "24/7 Support Chat", "30-Day Money-Back Guarantee"]

class Footer extends Component {
  render() {
    return (
      <div className="container pt-4 pb-3">
        <div className="row">
          {footerLabels.map(((label, i) => 
            <FooterItem key={i} label={label}/>))}
        </div>
      </div>
    );
  }
}

export default Footer;
