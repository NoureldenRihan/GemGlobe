import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default Posts;
