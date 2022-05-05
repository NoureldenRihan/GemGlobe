import React, { Component } from "react";
import Image from "next/image";

class UserSuggest extends Component {
  state = {};
  render() {
    return (
      <div className="suggest">
        <div className="mini-user-image-holder">
          <Image
            className="mini-user-img"
            src="/GemGlobe.png"
            alt="User Image"
            width={50}
            height={50}
          />
        </div>
        <div className="details">
          <h2>GemGlobe</h2>
          <h4>Volcanic Gems</h4>
        </div>
        <h3 className="follow">Follow</h3>
      </div>
    );
  }
}

export default UserSuggest;
