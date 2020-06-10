//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data';

const PostsPage = (probs) => {
  // set up state for your data

  const [ post, setPosts ] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        post.map(postData => {
          return(
            <Post key = {postData.id} post = {postData} />
          );
        })
      }
    </div>
  );
};

export default PostsPage;
