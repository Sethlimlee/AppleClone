import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="landingX">
          <div className="iPhoneX">iPhone X</div>
          <div className="sayHello">Say hello to the future.</div>
          <div className="iPhoneXPic">
            <img
              src="https://www.apple.com/v/home/dq/images/heroes/iphone-x/iphone_x_largetall.jpg"
              alt="Apple Logo"
              height="207"
              width="981"
              align="middle"
            />
          </div>
        </div>
        <div className="red">
          <div className="special">
            <div>Special Edition</div>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/home/dq/images/logos/product_red_logo_alt_large.png"
              alt="Apple Logo"
              height="78"
              width="518"
              align="middle"
            />
            <div className='learn'>
            Learn about (RED) ® >   Buy >
            </div>
            <div>
            <img
              src="https://www.apple.com/v/home/dq/images/heroes/product-red/hero_largetall.jpg"
              alt="Apple Logo"
              height="441"
              width="460"
              align="middle"
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
