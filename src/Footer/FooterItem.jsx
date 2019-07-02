import React, { Component } from 'react';
import FooterCheckmark from './FooterCheckmark';
import './styles.scss';

class FooterItem extends Component {
  
  render() {
    const {label} = this.props;
    return (
      <div className="col-xl-3 col-lg-6 col-md-12 text-center">
        <FooterCheckmark/>
        <div className="footer-text d-inline">{label}</div>
      </div>
    );
  }
}

export default FooterItem;
