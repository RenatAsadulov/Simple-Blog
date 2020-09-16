import React, { useEffect } from "react";
import { Posts } from "./Posts/Posts";
import Post from "./Posts/Post/Post";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

export const MainContent = ({ posts, setPosts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      axios
        .get(
          "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=7e025b29764c4e6d82a808ef89a5f17c"
        )
        .then((res) => {
          setPosts(res.data.articles);
        });
    }
  });

  const renderPost = (routerProps) => {
    let postId = parseInt(routerProps.match.params.id);
    let foundPost = posts.find((post) => post.postID === postId);
    return foundPost ? <Post post={foundPost} /> : <div>Not found</div>;
  };

  console.log(posts);

  return (
    <BrowserRouter>
      <Route
        path="/"
        render={(routerProps) => (
          <Posts posts={posts} routerProps={routerProps} />
        )}
        exact
      />
      <Route path="/posts/:id" render={(routerProps) => renderPost(routerProps)} />
    </BrowserRouter>
  );
};
