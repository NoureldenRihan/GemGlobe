import React, { Component } from "react";
import UserSuggest from "./UserSuggest";

class FollowSuggests extends Component {
  state = {};
  render() {
    return (
      <div className="follow-suggests">
        <h2 className="heading">Suggestions</h2>
        <UserSuggest id={1} />
        <UserSuggest id={2} />
        <UserSuggest id={3} />
        <UserSuggest id={4} />
      </div>
    );
  }
}

export default FollowSuggests;
