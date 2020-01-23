//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log(props);
  return (
    <div className="posts-container-wrapper">

{/* //passing data from App state  */}
        
 {props.data.map((post) => {
   //give the Post component that we are creating over and over again  a props called key- putting something unique inside
 return <Post key={props.data} 
 
 post={post}/>
 
 
 })   }
  
      

      </div>
  );
};

export default PostsPage;

