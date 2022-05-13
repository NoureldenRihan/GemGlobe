import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import Comment from "./Comment";

class Post extends Component {
  state = {};

  modifyPost = (e) => {
    const button = document.getElementById("post-comment");
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
      document.getElementById("addComment").focus();
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
              <h2>GemGlobe</h2>
            </Link>
            <h4>Volcanic Gems</h4>
          </div>
          <i className="icon bi bi-three-dots"></i>
        </div>
        <div className="images">
          <img className="post-img" src="/GemGlobe.png" alt="post-img" />
        </div>
        <div className="likes">
          <div className="icons">
            <div className="left">
              <i className="icon bi bi-heart" onClick={this.postIconClick}></i>
              <i className="icon bi bi-chat" onClick={this.postIconClick}></i>
              <i className="icon bi bi-send" onClick={this.postIconClick}></i>
            </div>
            <div className="right">
              <i
                className="icon bi bi-bookmark"
                onClick={this.postIconClick}
              ></i>
            </div>
          </div>
          <p className="total-likes">2,239 likes</p>
        </div>
        <div className="post-details">
          <h4>
            <p>
              <Link href="/users/user2300">Username</Link>
            </p>
            hes been a kitchen fabricator for many years but as a keen baker
            wasnt happy with many baking ovens so he just made his own ! As you
            do ! And its brilliant
          </h4>
        </div>
        <div className="comments">
          <Comment like={this.postIconClick} />
          <Comment like={this.postIconClick} />
        </div>
        <div className="add-comment">
          <textarea
            onChange={this.modifyPost}
            id="addComment"
            placeholder="Add a comment..."
          />
          <h3 id="post-comment" className="disabled">
            Post
          </h3>
        </div>
      </div>
    );
  }
}

export default Post;
