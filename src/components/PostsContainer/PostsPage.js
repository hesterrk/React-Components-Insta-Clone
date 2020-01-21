//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">

{/* //passing data from App state  */}
        

     
      {/* map through data here */}
      {/* {setDummy.map((post) => {
        return (
          <Post 
          post={post}
          // setDummy={props.setDummy}
          // setSelectedDummy={props.setSelectedDummy}
          />

        )
      })} */}
  {/* //need to return the specific things on the data object */}
      {/* (item => <Post post={props.setDummy.username, thumbnailUrl, imageUrl, comments}  /> )} */}
    </div>
  );
};

export default PostsPage;

