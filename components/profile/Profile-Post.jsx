import React, { Component } from "react";

class ProfilePost extends Component {
  state = {};
  render() {
    return (
      <div className="profile-post">
        <img src={this.props.img} alt="Post img" />
        <div className="post-stats">
          <div className="likes">
            <img
              className="icon"
              src="/SVGs/heart-fill.svg"
              style={{ filter: `invert(1)` }}
            />
            <i className="icon bi bi-heart-fill"></i>
            <h4>{this.props.likes}</h4>
          </div>
          <div className="comments">
            <img
              className="icon"
              src="/SVGs/chat-fill.svg"
              style={{ filter: `invert(1)` }}
            />
            <i className="icon bi bi-chat-fill"></i>
            <h4>{this.props.comments}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePost;
