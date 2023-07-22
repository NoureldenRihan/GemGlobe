import React, { Component } from "react";

class Info extends Component {
  state = {
    followers: this.props.data.stats.followers,
    isFollowing: false,
  };

  followUser = (e) => {
    if (this.state.isFollowing) {
      this.setState({
        followers: this.props.data.stats.followers,
        isFollowing: false,
      });
      e.target.innerHTML = "Follow";
    } else {
      this.setState({
        followers: this.props.data.stats.followers + 1,
        isFollowing: true,
      });
      e.target.innerHTML = "Following";
    }
  };

  render() {
    return (
      <div className="user-info-area">
        <div className="user-info">
          <div className="top">
            <h2>GemGlobe</h2>
            <button className="profile-btns">Message</button>
            <button className="profile-btns" onClick={this.followUser}>
              Follow
            </button>
            <img className="icon" src="/SVGs/three-dots.svg" />
          </div>
          <div className="stats">
            <h3>
              <span>{this.props.data.posts.length}</span> posts
            </h3>
            <h3>
              <span>{this.state.followers}</span> followers
            </h3>
            <h3>
              <span>{this.props.data.stats.following}</span> following
            </h3>
          </div>
          <div className="details">
            <h2>GemGlobe</h2>
            <h3>Gem lover and enthusiast</h3>
          </div>
        </div>
        <div className="user-info-small">
          <div className="top">
            <h2>GemGlobe</h2>
            <img className="icon" src="/SVGs/three-dots.svg" />
            <button className="profile-btns">Message</button>
            <button className="profile-btns" onClick={this.followUser}>
              Follow
            </button>
          </div>
          <div className="details">
            <h2>GemGlobe</h2>
            <h3>Gem lover and enthusiast</h3>
          </div>
          <div className="stats">
            <h3>
              <span>{this.props.data.posts.length}</span> posts
            </h3>
            <h3>
              <span>{this.props.data.stats.followers}</span> followers
            </h3>
            <h3>
              <span>{this.props.data.stats.following}</span> following
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
