//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      <div> dummyData={props.setDummy} </div>
      {/* map through data here */}
      {data.map(item => <Post post={props.setDummy.username, thumbnailUrl, imageUrl, comments}  /> )}
    </div>
  );
};

export default PostsPage;

