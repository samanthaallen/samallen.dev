import React from "react";
import "./PostContainer.css";

function PostContainer(props) {
  return (
    <div className="PostContainer">
      <div className="StickyTape">
        <h3 className="StickyTapeWords">{props.stickyTape}</h3>
      </div>
      {props.children}
    </div>
  );
}

export default PostContainer;
