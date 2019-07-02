import React, { Component } from 'react';
import BannerSavings from './BannerSavings';
import './styles.scss';
class BannerXXLPrice extends Component {
  getRoundedPercentage = (full, part) => {
    return Math.ceil( 100 - part/full*100);
  }
  getIntegralPart = (number) => {
    return Math.floor(number);
  }
  getFractionPart = (number) => {
    return Math.ceil((number - this.getIntegralPart(number))*100);
  }
  render() {
    const {actualPrice, offerPrice, currency, duration } = this.props;
    return (
      <div className="col-lg-6 order-lg-2 order-1">
            <div className="row pt-4 d-lg-block d-none"/>
            <BannerSavings savings={this.getRoundedPercentage(actualPrice, offerPrice)}/>
            <div className="row justify-content-center">
              <div className="big-currency"> {currency} </div>
              <div className="big-integral"> {this.getIntegralPart(offerPrice)}</div>
              <div className="big-fractional"> {this.getFractionPart(offerPrice)}</div>
              <div className="big-duration"> {duration}</div>
            </div>
      </div>
    );
  }
}

export default BannerXXLPrice;
