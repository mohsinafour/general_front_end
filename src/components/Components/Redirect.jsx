import React, { Component } from "react";

class Redirect extends Component {
  state = {};

  componentDidMount() {
    this.foo();
  }

  foo() {
    var x = window.location.hash;
    console.log(x);
    window.location =
      "http://localhost:8888/general/general_oauth_redirected?" + x.slice(1);
  }

  fidrainer = () => {
    console.log("logged");
  };

  render() {
    return <div>{this.fidrainer()}</div>;
  }
}

export default Redirect;
