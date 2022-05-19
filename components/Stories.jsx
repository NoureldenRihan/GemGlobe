import React, { Component } from "react";
import Image from "next/image";
import Story from "./Story";

class Stories extends Component {
  state = {
    storyUsernames: [...this.props.stories],
  };
  render() {
    return (
      <div className="stories">
        {this.state.storyUsernames.map((item) => (
          <Story key={item.id} id={item.id} username={item.name} />
        ))}
      </div>
    );
  }
}

export default Stories;
