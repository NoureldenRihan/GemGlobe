import React, { Component } from "react";
import ProfilePost from "./Profile-Post";

class PostsLayout extends Component {
  state = {};
  render() {
    return (
      <div className="posts-layout">
        <div className="filters">
          <div className="posts-filter">
            <img className="icon" src="/SVGs/filter-circle.svg" />
            <h3>Posts</h3>
          </div>
          <div className="tagged-filter">
            <img className="icon" src="/SVGs/hash.svg" />
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
