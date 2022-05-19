import { Fragment } from "react";
import Nav from "../../components/Nav";
import PostsLayout from "../../components/profile/Posts-Layout";
import User from "../../components/profile/User";
import AppInfo from "../../components/App-Info.jsx";

export default function ProfilePageWrapper() {
  const data = {
    posts: [
      { id: 1, img: "/Gem17.jpg", likes: "34K", comments: "100" },
      { id: 2, img: "/Gem18.jpg", likes: "740K", comments: "4002" },
      { id: 3, img: "/Gem16.jpg", likes: "24K", comments: "540" },
      { id: 4, img: "/Gem12.jpg", likes: "33K", comments: "384" },
      { id: 5, img: "/Gem10.jpg", likes: "2K", comments: "2334" },
      { id: 6, img: "/Gem14.jpg", likes: "29K", comments: "586" },
      { id: 7, img: "/Gem9.jpg", likes: "80K", comments: "23" },
      { id: 8, img: "/Gem20.jpg", likes: "870K", comments: "2300" },
    ],
    stats: {
      followers: 28301,
      following: 3020,
    },
  };

  return (
    <Fragment>
      <Nav />
      <div className="user-profile">
        <div className="container">
          <User data={data} />
          <PostsLayout data={data.posts} />
          <AppInfo />
        </div>
      </div>
    </Fragment>
  );
}
