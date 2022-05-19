import React, { Component } from "react";
import Image from "next/image";
class UserSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  followState = (e) => {
    let current = e.target.innerHTML;
    let currentId = e.target.dataset.id;
    if (current === "Follow") {
      document.getElementById(`follow${currentId}`).innerHTML = "Following";
    } else {
      document.getElementById(`follow${currentId}`).innerHTML = "Follow";
    }
  };

  render() {
    return (
      <div className="suggest">
        <div className="mini-user-image-holder">
          <Image
            className="mini-user-img"
            src={this.props.img}
            alt="User Image"
            width={50}
            height={50}
          />
        </div>
        <div className="details">
          <h2>{this.props.username}</h2>
          <h4>{this.props.userDescription}</h4>
        </div>
        <h3
          id={`follow${this.props.id}`}
          data-id={this.props.id}
          className="follow"
          onClick={this.followState}
        >
          Follow
        </h3>
      </div>
    );
  }
}

export default UserSuggest;
