import React from "react";
import "./widgets.css";
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
// } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon classNote="widgets_searchIcon" />
        <input type="text" placeholder="Search Twitter " />
      </div>

      <div className="widgets_widgetsContainer">
        <h2>whats happening</h2>
      </div>

      {/* <TwitterTweetEmbed tweetId={"parth dalsaniya"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="parth dalsaniya"
        options={{ height: 400 }}
      />

      <TwitterShareButton
        url={""}
        options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
      /> */}
    </div>
  );
}

export default Widgets;
