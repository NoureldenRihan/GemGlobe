import React, { Component } from "react";
import UserSuggest from "./UserSuggest";

class FollowSuggests extends Component {
  state = {};
  render() {
    return (
      <div className="follow-suggests">
        <h2 className="heading">Suggestions</h2>
        {this.props.users.map((user) => (
          <UserSuggest
            key={user.id}
            id={user.id}
            img={user.img}
            username={user.name}
            userDescription={user.description}
          />
        ))}
      </div>
    );
  }
}

export default FollowSuggests;
