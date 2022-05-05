import React, { Component } from "react";
import Link from "next/link";

class AppInfo extends Component {
  state = {};
  render() {
    return (
      <div className="app-info">
        <p>About . Help . Privacy . Terms </p>
        <h3>
          @2022, Made by
          <Link href="https://nourelden-rihan.web.app/"> Nourelden Rihan</Link>
        </h3>
      </div>
    );
  }
}

export default AppInfo;
