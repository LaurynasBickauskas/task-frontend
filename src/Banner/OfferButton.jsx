import React, { Component } from 'react';
import './styles.scss';

class OfferButton extends Component {

  render() {
    const {onClick, label} = this.props;
    return (
      <div onClick={onClick} className="col-lg-6 col-9 offer-button text-center">
          <div>{label}</div>
      </div>
    );
  }
}

export default OfferButton;
