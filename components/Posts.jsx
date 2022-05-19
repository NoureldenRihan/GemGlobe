import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="posts">
        {this.props.posts.map((post) => (
          <Post key={post.id} id={post.id} />
        ))}
      </div>
    );
  }
}

export default Posts;
