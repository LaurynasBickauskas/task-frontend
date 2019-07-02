import React, { Component } from 'react';
import './styles.scss';

class OfferButton extends Component {

  render() {
    const {savings} = this.props;
    return (
        <div className="d-lg-block d-none">
            <div className="row justify-content-center text-center">
                <div className="col-4 offer-savings pt-2 pb-2">{"SAVE " + savings +"%" }</div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="triangle-bottom"/>
            </div>
        </div>

    );
  }
}

export default OfferButton;
