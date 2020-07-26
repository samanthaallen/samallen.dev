import React from "react";
import "./PostPreview.css";

function PostPreview(props) {
  return (
    <div className="PostPreview">
      <a className="PostText" href={props.url}>
        <div className="PostSpacer">
          <h2>{props.title}</h2>
        </div>
        <img src={props.image} className="PostImage" />
        <p>{props.children}</p>
      </a>
    </div>
  );
}

export default PostPreview;
