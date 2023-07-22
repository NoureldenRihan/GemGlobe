import React, { Component } from "react";
import Link from "next/link";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  likeComment = () => {
    if (!this.state.isLiked) {
      this.setState({
        isLiked: true,
      });
      return;
    }
    this.setState({
      isLiked: false,
    });
  };

  render() {
    return (
      <div className="comment">
        <h4>
          <p>
            <Link href="/users/user2300">{this.props.username}</Link>
          </p>
          {this.props.comment}
        </h4>
        <img
          className="icon"
          src={this.state.isLiked ? "/SVGs/heart-fill.svg" : "/SVGs/heart.svg"}
          onClick={this.likeComment}
        ></img>
      </div>
    );
  }
}

export default Comment;
