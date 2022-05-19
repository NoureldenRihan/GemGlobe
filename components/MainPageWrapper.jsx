import { Fragment } from "react";
import AppInfo from "../components/App-Info";
import FollowSuggests from "../components/Follow-Suggests";
import Nav from "../components/Nav";
import Posts from "../components/Posts";
import Stories from "../components/Stories";
import UserInfo from "../components/User-Info";

export default function MainPageWrapper() {
  const data = {
    stories: [
      {
        id: 1,
        name: "User One",
        img: "/Gem1.jpg",
      },
      {
        id: 2,
        name: "User Two",
        img: "/Gem3.jpg",
      },
      {
        id: 3,
        name: "User Three",
        img: "/Gem2.jpg",
      },
      {
        id: 4,
        name: "User Four",
        img: "/Gem4.jpg",
      },
      {
        id: 5,
        name: "User Five",
        img: "/Gem5.jpg",
      },
      {
        id: 6,
        name: "User Six",
        img: "/Gem1.jpg",
      },
    ],
    posts: [
      {
        id: 1,
        name: "GemGlobe",
        description: "Volcanic Gems",
        userimg: "/GemGlobe.png",
        details: "Lovely Emeralds.",
        img: "/Gem20.jpg",
        likes: 402900,
        comments: [
          {
            id: 1,
            user: "User Three",
            comment: "This is beautiful",
          },
          {
            id: 2,
            user: "User Six",
            comment: "Amazing!",
          },
          {
            id: 3,
            user: "User One",
            comment: "Fantastic!",
          },
        ],
      },
      {
        id: 2,
        name: "User Five",
        description: "I am User Five",
        userimg: "/Gem14.jpg",
        details: "This is a new Post by me, I have always loved Gems.",
        img: "/Gem18.jpg",
        likes: 999999,
        comments: [
          {
            id: 1,
            user: "User Seven",
            comment: "WoW",
          },
          {
            id: 2,
            user: "User Nine",
            comment: "Extraordinary",
          },
        ],
      },
      {
        id: 3,
        name: "User One",
        description: "I am User One",
        userimg: "/Gem10.jpg",
        details:
          "These are some new Lovely Gems I Found, I have always loved Gems.",
        img: "/Gem10.jpg",
        likes: 1200,
        comments: [
          {
            id: 1,
            user: "User Five",
            comment: "These are beautiful",
          },
          {
            id: 2,
            user: "User Six",
            comment: "Amazing ones!",
          },
        ],
      },
      {
        id: 4,
        name: "User Three",
        description: "I am User Three",
        userimg: "/Gem12.jpg",
        details: "Lovely.",
        img: "/Gem17.jpg",
        likes: 769039,
        comments: [
          {
            id: 1,
            user: "User Five",
            comment: "Are these Sapphires?",
          },
        ],
      },
      {
        id: 5,
        name: "User Seven",
        description: "I am User Seven",
        userimg: "/Gem3.jpg",
        details: "A tiny Collection i have.",
        img: "/Gem13.jpg",
        likes: 1029,
        comments: [],
      },

      {
        id: 6,
        name: "GemGlobe",
        description: "Volcanic Gems",
        userimg: "/GemGlobe.png",
        details: "New Profile Picture.",
        img: "/GemGlobe.png",
        likes: 900889,
        comments: [],
      },
    ],
    followSuggests: [
      {
        id: 1,
        name: "User One",
        description: "I am user one",
        img: "/Gem3.jpg",
      },
      {
        id: 2,
        name: "User Two",
        description: "I am user two",
        img: "/Gem8.jpg",
      },
      {
        id: 3,
        name: "User Three",
        description: "I am user three",
        img: "/Gem9.jpg",
      },
      {
        id: 4,
        name: "User Four",
        description: "I am user four",
        img: "/Gem7.jpg",
      },
    ],
  };

  return (
    <Fragment>
      <Nav />
      <div className="non-nav">
        <div className="container">
          <div className="content-area">
            <div className="feed">
              <Stories stories={data.stories} />
              <Posts posts={data.posts} />
            </div>
            <div className="side-info">
              <div className="side-info-holder">
                <UserInfo />
                <FollowSuggests users={data.followSuggests} />
                <AppInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
