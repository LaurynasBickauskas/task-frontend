import React, { Component } from 'react';
import './styles.scss';

class HeaderNavItem extends Component {
  	render() {
		const {mainText, extraText} =this.props;
		return (
			<div className="col-3 header-text" >
					{mainText}
					{extraText &&
						<div className="extra-header-text">{extraText}</div>
					}
			</div>
		);
	}
}

export default HeaderNavItem;
