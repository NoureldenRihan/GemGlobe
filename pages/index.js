import { Fragment } from "react";
import AppInfo from "../components/App-Info";
import FollowSuggests from "../components/Follow-Suggests";
import Nav from "../components/Nav";
import Posts from "../components/Posts";
import Stories from "../components/Stories";
import UserInfo from "../components/User-Info";

export default function Main() {
  return (
    <Fragment>
      <Nav />
      <div className="non-nav">
        <div className="container">
          <div className="content-area">
            <div className="feed">
              <Stories />
              <Posts />
            </div>
            <div className="info">
              <UserInfo />
              <FollowSuggests />
              <AppInfo />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
