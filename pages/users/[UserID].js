import Nav from "../../components/Nav";
import PostsLayout from "../../components/profile/Posts-Layout";
import User from "../../components/profile/User";

export default function UserArea() {
  return (
    <>
      <Nav />
      <div className="user-profile">
        <div className="container">
          <User />
          <PostsLayout />
        </div>
      </div>
    </>
  );
}
