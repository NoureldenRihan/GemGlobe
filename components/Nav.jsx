import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";

class Nav extends Component {
  state = {};

  navIconClick = (e) => {
    let fullClass = e.target.classList.value;
    let navIcons = document.querySelectorAll("nav .container .nav-icons .icon");
    for (let i = 0; i < navIcons.length; i++) {
      let currentClass = navIcons[i].classList.value;

      if (currentClass.slice(-4) === "fill") {
        navIcons[i].classList.value = currentClass.slice(0, -5);
      }
    }
    if (fullClass.slice(-4) === "fill") {
      e.target.classList.value = fullClass.slice(0, -5);
    } else {
      e.target.classList.value += "-fill";
    }
  };

  render() {
    return (
      <nav>
        <div className="container">
          <h1 className="c3">
            <Link href="/">GemGlobe</Link>
          </h1>
          <div className="c3 search-area">
            <span className="search-icon">
              <i className="icon bi bi-search"></i>
            </span>
            <input type="search" className="search" placeholder="Search" />
          </div>
          <div className="c3 nav-icons">
            <Link href="/">
              <i
                className="icon notify bi bi-house-door"
                onClick={this.navIconClick}
              ></i>
            </Link>
            {/* <i class="icon bi bi-house-door-fill"></i> */}
            <i
              className="icon bi bi-plus-square"
              onClick={this.navIconClick}
            ></i>
            {/* <i class="icon bi bi-plus-square-fill"></i> */}
            <i className="icon bi bi-compass" onClick={this.navIconClick}></i>
            {/* <i class="icon bi bi-compass-fill"></i> */}
            <i
              className="icon notify bi bi-heart"
              onClick={this.navIconClick}
            ></i>
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
