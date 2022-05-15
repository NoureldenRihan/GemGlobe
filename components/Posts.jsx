import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="posts">
        <Post id={1} />
        <Post id={2} />
        <Post id={3} />
      </div>
    );
  }
}

export default Posts;
