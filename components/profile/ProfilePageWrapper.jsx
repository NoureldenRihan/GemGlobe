import { Fragment } from "react";
import Nav from "../../components/Nav";
import PostsLayout from "../../components/profile/Posts-Layout";
import User from "../../components/profile/User";
import AppInfo from "../../components/App-Info.jsx";

export default function ProfilePageWrapper() {
  const data = {};

  return (
    <Fragment>
      <Nav />
      <div className="user-profile">
        <div className="container">
          <User />
          <PostsLayout />
          <AppInfo />
        </div>
      </div>
    </Fragment>
  );
}
