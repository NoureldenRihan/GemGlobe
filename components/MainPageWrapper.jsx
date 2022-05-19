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
        img: "/GemGlobe.png",
      },
      {
        id: 2,
        name: "User Two",
        img: "/GemGlobe.png",
      },
      {
        id: 3,
        name: "User Three",
        img: "/GemGlobe.png",
      },
      {
        id: 4,
        name: "User Four",
        img: "/GemGlobe.png",
      },
      {
        id: 5,
        name: "User Five",
        img: "/GemGlobe.png",
      },
      {
        id: 6,
        name: "User Six",
        img: "/GemGlobe.png",
      },
    ],
    posts: [
      {
        id: 1,
        name: "User One",
        description: "I am User One",
        details: "This is a new Post by me, I have always loved Gems.",
        img: "/GemGlobe.png",
        likes: 23422,
        comments: [
          {
            id: 1,
            user: "User One",
            comment: "This is beautiful",
          },
        ],
      },
      {
        id: 2,
        name: "User Two",
        description: "I am User Two",
        details: "This is a new Post by me, I have always loved Gems.",
        img: "/GemGlobe.png",
        likes: 23422,
        comments: [
          {
            id: 1,
            user: "User Three",
            comment: "This is beautiful",
          },
        ],
      },
      {
        id: 3,
        name: "User Three",
        description: "I am User Three",
        details: "This is a new Post by me, I have always loved Gems.",
        img: "/GemGlobe.png",
        likes: 23422,
        comments: [
          {
            id: 1,
            user: "User Five",
            comment: "This is beautiful",
          },
        ],
      },
      {
        id: 4,
        name: "User Four",
        description: "I am User Four",
        details: "This is a new Post by me, I have always loved Gems.",
        img: "/GemGlobe.png",
        likes: 23422,
        comments: [
          {
            id: 1,
            user: "User Two",
            comment: "This is beautiful",
          },
        ],
      },
      {
        id: 5,
        name: "User Five",
        description: "I am User Five",
        details: "This is a new Post by me, I have always loved Gems.",
        img: "/GemGlobe.png",
        likes: 23422,
        comments: [
          {
            id: 1,
            user: "User Seven",
            comment: "This is beautiful",
          },
        ],
      },
      {
        id: 6,
        name: "User Six",
        description: "I am User Six",
        details: "This is a new Post by me, I have always loved Gems.",
        img: "/GemGlobe.png",
        likes: 23422,
        comments: [
          {
            id: 1,
            user: "User Ten",
            comment: "This is beautiful",
          },
        ],
      },
    ],
    followSuggests: [
      {
        id: 1,
        name: "User One",
        description: "I am user one",
        img: "/GemGlobe.png",
      },
      {
        id: 2,
        name: "User Two",
        description: "I am user two",
        img: "/GemGlobe.png",
      },
      {
        id: 3,
        name: "User Three",
        description: "I am user three",
        img: "/GemGlobe.png",
      },
      {
        id: 4,
        name: "User Four",
        description: "I am user four",
        img: "/GemGlobe.png",
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
