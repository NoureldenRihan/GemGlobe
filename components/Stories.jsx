import React, { Component } from "react";
import Image from "next/image";
import Story from "./Story";

class Stories extends Component {
  state = {};
  render() {
    return (
      <div className="stories">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    );
  }
}

export default Stories;
