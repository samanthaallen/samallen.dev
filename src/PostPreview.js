import React from "react";
import "./PostPreview.css";

function PostPreview(props) {
  return (
    <div className="PostPreview">
      <a className="PostText" href={props.url}>
        <img src={props.image} className="PostImage" alt=""/>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
      </a>
    </div>
  );
}

export default PostPreview;
