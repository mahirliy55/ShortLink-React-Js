import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <section className="cards">
        <div className="container">
          <div className="title">
            <div className="cards__first">
                <div className="logo">
                </div>
                    <div className="logo__child"></div>
              <div>
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="cards__second">
            <div className="logo__second">
                </div>
                    <div className="logo__child__second"></div>
              <div>
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="cards__third">
            <div className="logo__third">
                </div>
                    <div className="logo__child__third"></div>
              <div>
                <h3>Fully Customizable</h3>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
