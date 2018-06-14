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
            <div className="learn">Learn about (RED) ® > Buy ></div>
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
        <div className="gray">
          <div className="iPadLanding">
            <div className="iPhoneX">iPad</div>
            <div className="sayHello">
              Like a computer. Unlike any computer.
            </div>
            <div className="pencil">
              <img
                src="https://www.apple.com/v/home/dq/images/heroes/ipad/ipad_largetall.jpg"
                alt="Apple Logo"
                height="455"
                width="1068"
                align="middle"
              />
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="boxOne">
          <div>
            iOS 12 
          </div>
          <div className='more'>
            More power to you.
          </div>
          </div>
          <div className="boxTwo">
            <div />
          </div>
          <div className="boxThree">
            <div />
          </div>
          <div className="boxFour">
            <div />
          </div>
          <div className="boxFive">
            <div />
          </div>
          <div className="boxSix">
            <div />
          </div>
        </div>
        <div className="footer">
          <div className="footerbox">
            <div className="africa">
              <div>
                A portion of the proceeds from every (PRODUCT)RED™ purchase will
                go to the Global Fund to fight AIDS in Africa.
              </div>
              <br />
              <div>
                The Greatest Showman is available on iTunes. The Greatest
                Showman © 2018 FOX. All rights reserved.
              </div>
            </div>
            <div className="footerLinks">
              <div className="footerLinkButtons">
                <div className="bold">Shop and Learn</div>
                <br />
                <div>Mac</div>
                <br />
                <div>iPad</div>
                <br />
                <div>iPhone</div>
                <br />
                <div>Watch</div>
                <br />
                <div>TV</div>
                <br />
                <div>Music</div>
                <br />
                <div>iTunes</div>
                <br />
                <div>HomePod</div>
                <br />
                <div>iPod touch</div>
                <br />
                <div>Accessories</div>
                <br />
                <div>Gift Cards</div>
                <br />
              </div>
              <div className="footerLinkButtons">
                <div className="bold">Apple Store</div>
                <br />
                <div>Find a Store</div>
                <br />
                <div>Genius Bar</div>
                <br />
                <div>Today at Apple</div>
                <br />
                <div>Apple Camp</div>
                <br />
                <div>Field Trip</div>
                <br />
                <div>Apple Store App</div>
                <br />
                <div>Refurbished and Clearance</div>
                <br />
                <div>Financing</div>
                <br />
                <div>Apple GiveBack</div>
                <br />
                <div>Order Status</div>
                <br />
                <div>Shopping Help</div>
                <br />
              </div>
            </div>
            <div className="bottomInfo" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
