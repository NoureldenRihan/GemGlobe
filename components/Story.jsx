import React, { Component } from "react";
import Image from "next/image";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-id={this.props.id} className="story-layout">
        <div className="story">
          <img className="story-img" src="/GemGlobe.png" alt="User Image" />
        </div>
        <p>{this.props.username}</p>
      </div>
    );
  }
}

export default Story;
