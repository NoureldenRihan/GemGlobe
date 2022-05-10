import React, { Component } from "react";

class ProfilePost extends Component {
  state = {};
  render() {
    return (
      <div className="profile-post">
        <img src="/GemGlobe.png" alt="Post img" />
        <div className="post-stats">
          <div className="likes">
            <i className="icon bi bi-heart-fill"></i>
            <h4>40k</h4>
          </div>
          <div className="comments">
            <i className="icon bi bi-chat-fill"></i>
            <h4>2,346</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePost;
