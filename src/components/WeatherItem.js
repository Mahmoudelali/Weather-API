import React, { Component } from "react";

export default class WeatherItem extends Component {
  render() {
    return <div>Heello</div>;
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
        Hello {this.props.name}
      </div>
    );
  }
}
