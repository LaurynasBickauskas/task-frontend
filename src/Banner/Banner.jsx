import React, { Component } from 'react';
import BannerOffer from './BannerOffer'
import BannerXXLPrice from './BannerXXLPrice'
import './styles.scss';
// messages would come from translation module not from this element
// prices, date would come from some outside source
const actualPrice = 8.05;
const offerPrice = 1.45;
const offerCurrency = "€";
const offerText = ["New Year Offer", "82% OFF", "Web Hosting" ]
const buttonLabel = "Get started now";
const duration = "/mo"

class Banner extends Component {
  
  render() {
    return (
      <div className="container text-lg-left text-center">
        <div className="row justify-content-lg-start justify-content-center pt-5 pb-5">
          <BannerOffer offerText={offerText} buttonLabel={buttonLabel}/>
          <BannerXXLPrice duration={duration} actualPrice={actualPrice} offerPrice={offerPrice} currency={offerCurrency}/> 
        </div>
      </div>
    );
  }
}

export default Banner;
