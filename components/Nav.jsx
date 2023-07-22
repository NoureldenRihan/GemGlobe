import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";

class Nav extends Component {
  state = {};

  render() {
    return (
      <nav>
        <div className="container">
          <h1 className="c3">
            <Link href="/">GemGlobe</Link>
          </h1>
          <div className="c3 search-area">
            <span className="search-icon">
              <img src="/SVGs/search.svg"></img>
            </span>
            <input type="search" className="search" placeholder="Search" />
          </div>
          <div className="c3 nav-icons">
            <Link href="/">
              <img className="icon" src="/SVGs/house.svg"></img>
            </Link>
            <img className="icon" src="/SVGs/plus-square.svg"></img>
            <img className="icon" src="/SVGs/compass.svg"></img>
            <img className="icon" src="/SVGs/heart.svg"></img>
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
