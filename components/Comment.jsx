import React, { Component } from "react";
import Link from "next/link";

class Comment extends Component {
  state = {};
  render() {
    return (
      <div className="comment">
        <h4>
          <p>
            <Link href="/users/user2300">Username</Link>
          </p>
          comment
        </h4>
        <i className="icon bi bi-heart"></i>
      </div>
    );
  }
}

export default Comment;
