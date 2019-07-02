import React, { Component } from 'react';
import HeaderNavItem from './HeaderNavItem';
const HeaderNavItems = [
    {mainText:"web hosting"},
    {mainText:"cloud hosting", extraText: "on sale"},
    {mainText:"domain checker"},
    {mainText:"website builder"},
]
class HeaderNav extends Component {
  
  render() {
    return (
        <div className="col-xl-7 col-lg-9 d-none d-lg-block">
            <div className="row">
                {HeaderNavItems.map(({mainText, extraText}, i )=>
                    <HeaderNavItem key={i} mainText={mainText} extraText={extraText}/>
                )}
            </div>
        </div>
    );
  }
}

export default HeaderNav;
