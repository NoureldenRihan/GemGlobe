import React, { Component } from "react";
import Link from "next/link";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="comment">
        <h4>
          <p>
            <Link href="/users/user2300">{this.props.username}</Link>
          </p>
          {this.props.comment}
        </h4>
        <i className="icon bi bi-heart" onClick={this.props.like}></i>
      </div>
    );
  }
}

export default Comment;
