import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Posts.module.css";

export const Posts = ({ posts, updateCommentText }) => {
  console.log(updateCommentText);
  return (
    <ul className={style.articleList}>
      {posts.map((post) => (
        <NavLink
          to={`/posts/${post.postID}`}
          className={style.postLink}
          key={post.postID}
        >
          <li
            className={style.articleItem}
            key={post.postID}
            updateCommentText={updateCommentText}
          >
            <div>
              <img
                src={post.urlToImage}
                alt="someArticleImageHasToBeHere"
                className={style.articleImage}
              />
            </div>
            <div className={style.articlePound}>
              <h3>{post.title}</h3>
              <article>{post.description}</article>
            </div>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};
