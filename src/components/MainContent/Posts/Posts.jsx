import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Posts.module.css";

export const Posts = ({ posts }) => {
  return (
    <>
      <ul className={style.articleList}>
        {posts.map((post) => (
          <li className={style.articleItem} key={post.postID}>
            <div>
              <img
                src={post.urlToImage}
                alt="someArticleImageHasToBeHere"
                className={style.articleImage}
              />
            </div>
            <div className={style.articlePound}>
              <NavLink to={`/posts/${post.postID}`} className={style.postLink}>
                <h3>{post.title}</h3>
                <article>{post.description}</article>
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
