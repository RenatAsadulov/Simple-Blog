import React from "react";
import style from "./Post.module.css";
import { NavLink } from "react-router-dom";

const Post = ({ post }) => {
  console.log(post);
  const date = post.publishedAt.split("T");
  return (
    <div className={style.postWrapper}>
      <div className={style.postContent}>
        <div className={style.btnContainer}>
          <NavLink to="/" className={style.btnBackToPosts}>
           ← Back to Posts
          </NavLink>
        </div>
        <h2 className={style.articleName}>{post.title}</h2>
        <div className={style.postHeader}>
          {post.author !== null && (
            <h4 className={style.headerColor}>Author: {post.author}</h4>
          )}
          <h4 className={style.headerColor}>
            Date: {date[0]}, Time: {date[1]}{" "}
          </h4>
        </div>
        <div>
          <img src={post.urlToImage} alt="" className={style.articleImage} />
        </div>
        {post.content !== null && (
          <div className={style.articleContent}>{post.content}</div>
        )}
      </div>

      <form className={style.formWrapper} onSubmit={() => alert("Hello!")}>
        <textarea
          cols="30"
          rows="10"
          className={style.textareStyle}
          placeholder="Comment text"
        ></textarea>
        <br></br>
        <button className={style.btnClass}>Click HEre</button>
      </form>
    </div>
  );
};

export default Post;
