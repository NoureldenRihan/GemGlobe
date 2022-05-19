import React, { Component } from "react";
import ProfilePost from "./Profile-Post";

class PostsLayout extends Component {
  state = {};
  render() {
    return (
      <div className="posts-layout">
        <div className="filters">
          <div className="posts-filter">
            <i className="icon bi bi-filter-circle"></i>
            <h3>Posts</h3>
          </div>
          <div className="tagged-filter">
            <i className="icon bi bi-hash"></i>
            <h3>Tagged</h3>
          </div>
        </div>
        <div className="post-layout">
          {this.props.data.map((post) => (
            <ProfilePost
              key={post.id}
              id={post.id}
              img={post.img}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PostsLayout;
