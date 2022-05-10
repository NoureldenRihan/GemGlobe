import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="container">
          <h1 className="c3">GemGlobe</h1>
          <div className="c3 search-area">
            <span className="search-icon">
              <i className="icon bi bi-search"></i>
            </span>
            <input type="search" className="search" placeholder="Search" />
          </div>
          <div className="c3 nav-icons">
            <Link href="/">
              <i className="icon notify bi bi-house-door"></i>
            </Link>
            {/* <i class="icon bi bi-house-door-fill"></i> */}
            <i className="icon bi bi-plus-square"></i>
            {/* <i class="icon bi bi-plus-square-fill"></i> */}
            <i className="icon bi bi-compass"></i>
            {/* <i class="icon bi bi-compass-fill"></i> */}
            <i className="icon notify bi bi-heart"></i>
            {/* <i class="icon bi bi-heart-fill"></i> */}
            <Link href="/users/u2300">
              <Image
                className="icon icon-img"
                src="/GemGlobe.png"
                alt="Profile Icon"
                width={35}
                height={35}
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
