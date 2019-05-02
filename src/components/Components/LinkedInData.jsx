import React, { Component } from "react";
import axios from "axios";
import "../CSS/LinkedInData.css";
import "../CSS/Utils.css";

class LinkedInData extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    country: "",
    language: ""
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8888/general/fetch`, {
        withCredentials: true,
        Origin: "http://localhost:3000"
      })
      .then(res => {
        const persons = res.data;
        this.setState({ id: persons.id });
        this.setState({ firstName: persons.firstName.localized.en_US });
        this.setState({ lastName: persons.lastName.localized.en_US });
        this.setState({ country: persons.lastName.preferredLocale.country });
        this.setState({ language: persons.lastName.preferredLocale.language });
        this.setState({ onemore: persons.lastName.preferredLocale.fhghhg });
      });
  }

  render() {
    return (
      <div className="container-data">
        <div className="wrap-data p-l-55 p-r-55 p-t-80 p-b-30">
          <h3 className="p-l-80 p-t-20">Welcome {this.state.firstName}</h3>
        </div>
      </div>
    );
  }
}

export default LinkedInData;
