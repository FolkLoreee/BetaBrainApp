import React, { Component } from "react";
import ReactDOM from "react-dom";
import { create } from "domain";
import history from "./history";
import { Time } from "../App";

export class RestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: Time.RestT };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    Time.RestT = event.target.value;
  }

  handleSubmit(event) {
    alert("Study time is " + Time.StudyT + " minutes");
    alert("Rest time is " + Time.RestT + " minutes");
    history.push("/studytime");
  }
  render() {
    return (
      <div>
        <h1>
          <p>Rest Time</p>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={5}> 5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
