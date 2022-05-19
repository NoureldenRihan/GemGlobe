import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import Comment from "./Comment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  postIconClick = (e) => {
    let fullClass = e.target.classList.value;

    if (fullClass.slice(-10, -5) === "heart") {
      e.target.classList.value = fullClass.slice(0, -5);
      e.target.style.color = "black";
    } else if (fullClass.slice(-5) === "heart") {
      e.target.classList.value += "-fill";
      e.target.style.color = "red";
    } else if (fullClass.slice(-4) === "chat") {
      let commentAreaId = e.target.dataset.id;
      document.getElementById(`addComment${commentAreaId}`).focus();
    } else {
      if (fullClass.slice(-4) === "fill") {
        e.target.classList.value = fullClass.slice(0, -5);
      } else {
        e.target.classList.value += "-fill";
      }
    }
  };

  render() {
    return (
      <div className="post">
        <div className="user-info">
          <div className="post-user-image-holder">
            <Link href="/users/user2300">
              <Image
                className="post-user-img"
                src="/GemGlobe.png"
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
          <i className="icon bi bi-three-dots"></i>
        </div>
        <div className="images">
          <img className="post-img" src={this.props.img} alt="post-img" />
        </div>
        <div className="likes">
          <div className="icons">
            <div className="left">
              <i className="icon bi bi-heart" onClick={this.postIconClick}></i>
              <i
                className="icon bi bi-chat"
                data-id={this.props.id}
                onClick={this.postIconClick}
              ></i>
              <i className="icon bi bi-send" onClick={this.postIconClick}></i>
            </div>
            <div className="right">
              <i
                className="icon bi bi-bookmark"
                onClick={this.postIconClick}
              ></i>
            </div>
          </div>
          <p className="total-likes">{this.props.likes} likes</p>
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
          <Comment like={this.postIconClick} />
          <Comment like={this.postIconClick} />
          {this.props.comments.map((comment) => (
            <Comment
              key={comment.id}
              username={comment.user}
              data={comment.comment}
              like={this.postIconClick}
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
