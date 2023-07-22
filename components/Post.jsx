import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import Comment from "./Comment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      isLiked: false,
      isCommented: false,
      isSent: false,
      isBookmarked: false,
    };
  }

  modifyPost = (e) => {
    let commentAreaId = e.target.dataset.id;
    const button = document.getElementById(`post-comment${commentAreaId}`);
    if (e.target.value !== "") {
      button.classList.remove("disabled");
      button.classList.add("enabled");
    } else {
      button.classList.remove("enabled");
      button.classList.add("disabled");
    }
  };

  likePost = () => {
    if (!this.state.isLiked) {
      this.setState({
        likes: this.props.likes + 1,
        isLiked: true,
      });
      return;
    }
    this.setState({
      likes: this.props.likes,
      isLiked: false,
    });
  };

  commentPost = () => {
    if (!this.state.isCommented) {
      this.setState({
        isCommented: true,
      });
      return;
    }
    this.setState({
      isCommented: false,
    });
  };

  sentPost = () => {
    if (!this.state.isSent) {
      this.setState({
        isSent: true,
      });
      return;
    }
    this.setState({
      isSent: false,
    });
  };

  bookmarkPost = () => {
    if (!this.state.isBookmarked) {
      this.setState({
        isBookmarked: true,
      });
      return;
    }
    this.setState({
      isBookmarked: false,
    });
  };

  render() {
    return (
      <div className="post">
        <div className="user-info">
          <div className="post-user-image-holder">
            <Link href="/users/user2300">
              <Image
                className="post-user-img"
                src={this.props.userimg}
                alt="User Image"
                width={55}
                height={55}
              />
            </Link>
          </div>
          <div className="details">
            <Link href="/users/user2300">
              <h2>{this.props.name}</h2>
            </Link>
            <h4>{this.props.description}</h4>
          </div>
          <img className="icon" src="/SVGs/three-dots.svg"></img>
        </div>
        <div className="images">
          <img className="post-img" src={this.props.img} alt="post-img" />
        </div>
        <div className="likes">
          <div className="icons">
            <div className="left">
              <img
                className="icon"
                src={
                  this.state.isLiked
                    ? "/SVGs/heart-fill.svg"
                    : "/SVGs/heart.svg"
                }
                onClick={this.likePost}
              ></img>
              <img
                className="icon"
                src={
                  this.state.isCommented
                    ? "/SVGs/chat-fill.svg"
                    : "/SVGs/chat.svg"
                }
                data-id={this.props.id}
                onClick={this.commentPost}
              ></img>
              <img
                className="icon"
                src={
                  this.state.isSent ? "/SVGs/send-fill.svg" : "/SVGs/send.svg"
                }
                onClick={this.sentPost}
              ></img>
            </div>
            <div className="right">
              <img
                className="icon"
                src={
                  this.state.isBookmarked
                    ? "/SVGs/bookmark-fill.svg"
                    : "/SVGs/bookmark.svg"
                }
                onClick={this.bookmarkPost}
              ></img>
            </div>
          </div>
          <p className="total-likes">{this.state.likes} likes</p>
        </div>
        <div className="post-details">
          <h4>
            <p>
              <Link href="/users/user2300">Username</Link>
            </p>
            {this.props.details}
          </h4>
        </div>
        <div className="comments">
          {this.props.comments.map((comment) => (
            <Comment
              key={comment.id}
              username={comment.user}
              comment={comment.comment}
            />
          ))}
        </div>
        <div className="add-comment">
          <textarea
            onChange={this.modifyPost}
            id={`addComment${this.props.id}`}
            placeholder="Add a comment..."
            data-id={this.props.id}
          />
          <h3 id={`post-comment${this.props.id}`} className="disabled">
            Post
          </h3>
        </div>
      </div>
    );
  }
}

export default Post;
