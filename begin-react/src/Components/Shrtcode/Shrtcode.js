import React, { Component } from "react";

class Shrtcode extends Component {
  state = {
    text: "",
    data: [],
    completed: false,
    progress: false,
    isCopied: false,
  };

  // textHandler = (e) => {
  //   this.setState({ text: e.target.value });
  // };

  createMarkup = () => {
    return {
      __html: "Please add a link",
    };
  };

  formHandler = async (e) => {
    e.preventDefault();
    if (e.target.test.value == "") {
      this.setState({ text: null });
    } else {
      this.setState({ progress: true });
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${e.target.test.value}`
      );
      const data = await response.json();
      this.setState({
        data: [
          ...this.state.data,
          { real: this.state.text, transform: data.result.full_short_link },
        ],
        progress: false,
      });
    }
  };



  copier = (str) => {
    const el = document.createElement("textarea"); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
    el.style.position = "absolute";
    el.style.left = "-9999px"; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
      document.getSelection().addRange(selected); // Restore the original selection
    }
    this.setState({
      isCopied: true,
    });
  };

  render() {
    return (
      <section className="inputSec">
        <form onSubmit={this.formHandler}>
          <div className="container">
            <div className="title">
              <div className="input__back">
                <div className="input__front">
                  {this.state.text == "null" ? (
                    <input
                      className="input"
                      name="test"
                      type="text"
                      style={{ border: "2px solid red" }}
                    />
                  ) : (
                    <input
                      onChange={(e) => this.setState({ text: e.target.value })}
                      value={this.state.text}
                      className="input"
                      name="test"
                      type="text"
                    />
                  )}
                  {this.state.progress ? (
                    <div className="loader"></div>
                  ) : (
                    <button type="submit">Shorter it!</button>
                  )}

                  {this.state.text == null ? (
                    <span
                      dangerouslySetInnerHTML={this.createMarkup()}
                      style={{ color: "red" }}
                    ></span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <ul>
              {this.state.data.map((el) => (
                <div className="link">
                  <li className="left__text">{el.real}</li>
                  <li className="right__text">
                    <a href={el.transform}>{el.transform}</a>
                  </li>

                  <a
                    className="copy"
                    onClick={(() => this.copier(el.transform))}
                    style={{
                      backgroundColor: this.state.isCopied ? "#3a3053 " : null,
                    }}
                  >
                    {this.state.isCopied ? "Copied" : "Copy"}
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </form>
      </section>
    );
  }
}

export default Shrtcode;
