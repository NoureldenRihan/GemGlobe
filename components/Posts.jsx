import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="posts">
        {this.props.posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            description={post.description}
            details={post.details}
            img={post.img}
            userimg={post.userimg}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
