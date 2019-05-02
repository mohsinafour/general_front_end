import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../CSS/Data.css";

class Data extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    country: "",
    language: "",
    onemore: ""
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
      <div className="datadiv">
        <h1 className="marg">Please find your details fetched from LinkedIn</h1>
        <h4 className="display-6 marg">
          <small className="text-muted">ID: </small>
          {this.state.id}
        </h4>
        <h4 className="display-6 marg">
          <small className="text-muted">FirstName: </small>
          {this.state.firstName}
        </h4>
        <h4 className="display-6 marg">
          <small className="text-muted">LastName: </small>
          {this.state.lastName}
        </h4>
        <h4 className="display-6 marg">
          <small className="text-muted">Country: </small>
          {this.state.country}
        </h4>
      </div>
    );
  }
}

export default Data;
