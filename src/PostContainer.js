import React from "react";
import "./PostContainer.css";

function PostContainer(props) {
  return (
    <div className="PostContainer" style={{backgroundColor: props.backgroundColor}}>
      <div className="StickyTape" style={{backgroundColor: props.stickyTapeColor}}>
        <h3 className="StickyTapeWords">{props.stickyTape}</h3>
      </div>
      {props.children}
    </div>
  );
}

export default PostContainer;
