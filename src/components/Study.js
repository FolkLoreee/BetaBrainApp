import React, { Component } from "react";
import ReactDOM from "react-dom";
import { create } from "domain";
import history from "./history";
import { Time } from "../App";

export class StudyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: Time.StudyT };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    Time.StudyT = event.target.value;
    Time.RestT = 30 - Time.StudyT;
    if (Time.StudyT >= 30) {
      Time.RestT = 60 - Time.StudyT;
    }
  }

  handleSubmit(event) {
    history.push("/rest");
  }
  render() {
    return (
      <div>
        <h1>
          <p>Study Time</p>
        </h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={55}>55</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
