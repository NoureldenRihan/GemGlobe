import React, { Component } from "react";

class Info extends Component {
  state = {};
  render() {
    return (
      <div className="user-info-area">
        <div className="user-info">
          <div className="top">
            <h2>GemGlobe</h2>
            <button>Message</button>
            <button>Follow</button>
            <i className="icon bi bi-three-dots"></i>
          </div>
          <div className="stats">
            <h3>
              <span>5</span> posts
            </h3>
            <h3>
              <span>28,230</span> followers
            </h3>
            <h3>
              <span>2,230</span> following
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
            <i className="icon bi bi-three-dots"></i>
            <button>Message</button>
            <button>Follow</button>
          </div>
          <div className="details">
            <h2>GemGlobe</h2>
            <h3>Gem lover and enthusiast</h3>
          </div>
          <div className="stats">
            <h3>
              <span>5</span> posts
            </h3>
            <h3>
              <span>28,230</span> followers
            </h3>
            <h3>
              <span>2,230</span> following
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
