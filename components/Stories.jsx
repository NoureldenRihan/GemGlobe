import React, { Component } from "react";
import Image from "next/image";
import Story from "./Story";

class Stories extends Component {
  state = {
    storyUsernames: [
      {
        name: "Paul2393",
        id: "1",
      },
      {
        name: "Maged0434",
        id: "1",
      },
      {
        name: "Akram2910",
        id: "1",
      },
      {
        name: "Sarah1923",
        id: "1",
      },
      {
        name: "Larry2383",
        id: "2",
      },
      {
        name: "Lily8392",
        id: "2",
      },
    ],
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
