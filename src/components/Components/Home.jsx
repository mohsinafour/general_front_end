import React, { Component } from "react";
import "../CSS/home.css";
import "../CSS/Utils.css";
import googlelogo from "../Images/icon-google.png";
import jiralogo from "../Images/jira.png";
import githunlogo from "../Images/github.png";
import lilogo from "../Images/linkedin.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
          <form className="login100-form">
            <br />
            <br />
            <h2>Sign In Using</h2>
            <br />
            <br />
            <div className="flex-c p-b-112">
              <a
                href="http://localhost:8888/general/request_data?name=GOOGLE"
                className="login100-social-item"
              >
                <img src={googlelogo} alt="GOOGLE" />
              </a>
              <span className="m-l-10 login100-form-title">
                <a href="http://localhost:8888/general/request_data?name=GOOGLE">
                  Google
                </a>
              </span>
              <br />
              <a
                href="http://localhost:8888/general/request_data?name=GITHUB"
                className="login100-social-item"
              >
                <img src={githunlogo} alt="FB" />
              </a>
              <span className="m-l-10 login100-form-title">
                <a href="http://localhost:8888/general/request_data?name=GITHUB">
                  GitHub
                </a>
              </span>
              <br />
              <a
                href="http://localhost:8888/general/request_data?name=JIRA"
                className="login100-social-item"
              >
                <img src={jiralogo} alt="GOOGLE" />
              </a>
              <span className="m-l-10 login100-form-title">
                <a href="http://localhost:8888/general/request_data?name=JIRA">
                  Jira
                </a>
              </span>
              <br />
              <a
                href="http://localhost:8888/general/request_data?name=LINKEDIN"
                className="login100-social-item"
              >
                <img src={lilogo} alt="GOOGLE" />
              </a>
              <span className="m-l-10 login100-form-title">
                <a href="http://localhost:8888/general/request_data?name=LINKEDIN">
                  LinkedIN
                </a>
              </span>
            </div>
            <br />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
