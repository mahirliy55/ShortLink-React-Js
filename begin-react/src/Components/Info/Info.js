import React from "react";
import "../../scss/info.scss";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="title">
          <div className="info__left">
            <h2>More than just shorter links</h2>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </div>
          <div className="info__right"></div>
        </div>
      </div>
    </section>
  );
};

export default Info;
