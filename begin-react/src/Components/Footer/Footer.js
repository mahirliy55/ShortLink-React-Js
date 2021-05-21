import React, { Component } from "react";


export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="title">
            <div className="logo">
              <a href="">Shortly</a>
            </div>
            <div className="foot">
              <span className="first__span">Features</span>
              <a href=""> Link Shortening</a>
              <a href="">Branded Links</a>
              <a href="">Analytics</a>
            </div>
            <div className="foot">
              <span className="first__span">  Resources</span>
              <a href=""> Blog</a>
              <a href="">Developers</a>
              <a href="">Support</a>
            </div>
            <div className="foot">
              <span className="first__span">Features</span>
              <a href=""> Link Shortening</a>
              <a href="">Branded Links</a>
              <a href="">Analytics</a>
            </div>
            <div className="foot">
              <span className="first__span">Features</span>
              <a href=""> Link Shortening</a>
              <a href="">Branded Links</a>
              <a href="">Analytics</a>
            </div>
            <div className="icons">
                <a href="" className="icon1"></a>
                <a href="" className="icon2"></a>
                <a href="" className="icon3"></a>
                <a href="" className="icon4"></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
