import React, { Component } from "react";
import Image from "next/image";

class Story extends Component {
  state = {};
  render() {
    return (
      <div className="story-layout">
        <div className="story">
          <Image
            className="story-img"
            src="/GemGlobe.png"
            alt="User Image"
            width={55}
            height={55}
          />
        </div>
        <p>username</p>
      </div>
    );
  }
}

export default Story;
