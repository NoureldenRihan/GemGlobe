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
          <Image
            className="story-img"
            src={this.props.img}
            alt="User Image"
            width={75}
            height={75}
          />
        </div>
        <p>{this.props.username}</p>
      </div>
    );
  }
}

export default Story;
