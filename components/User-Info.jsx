import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class UserInfo extends Component {
  state = {};
  render() {
    return (
      <div className="user-info">
        <div className="mini-user-image-holder">
          <Link href="/users/user2300">
            <Image
              className="mini-user-img"
              src="/GemGlobe.png"
              alt="User Image"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="details">
          <Link href="/users/user2300">
            <h2>GemGlobe</h2>
          </Link>
          <h4>Volcanic Gems</h4>
        </div>
      </div>
    );
  }
}

export default UserInfo;
