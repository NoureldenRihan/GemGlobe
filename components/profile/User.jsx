import React, { Component } from "react";
import Image from "next/image";
import Info from "./Info";

class User extends Component {
  state = {};
  render() {
    return (
      <div className="user">
        <div className="user-profile-flex-holder">
          <div className="user-profile-img-holder">
            <Image
              className="user-profile-img"
              src="/GemGlobe.png"
              alt="User Image"
              width={175}
              height={175}
            />
          </div>
        </div>
        <Info />
      </div>
    );
  }
}

export default User;
