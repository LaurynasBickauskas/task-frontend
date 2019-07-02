import React, { Component } from 'react';
import OfferTimer from './OfferTimer';
import OfferButton from './OfferButton'
import './styles.scss';

class BannerOffer extends Component {
  onButtonClick = () => {
      console.log("some router assignment / this.props.onClick()");
  }
  render() {
    const {offerText, buttonLabel} = this.props;
    return (
		<div className="col-lg-6 order-lg-1 order-2">
			<div className="row pt-4 mt-5 d-lg-block d-none"/>
			<div className="offer-text-lg">
				<div>{offerText[0]}</div>
				<div>
					<div className={"d-inline mr-3 offer-emphasis-color"}key={1}>{(offerText[1])}</div>
					<div className={"d-inline"}key={2}>{offerText[2]}</div>
				</div>
			</div>
			{<OfferTimer/>}
			{<div className="row justify-content-lg-start justify-content-center">
				<OfferButton onClick={this.onButtonClick} label={buttonLabel}/>
			</div>}
		</div>
    );
  }
}

export default BannerOffer;
