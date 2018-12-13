import React, { Component } from "react";
import Img from "gatsby-image";
import path from "path";
import "./PostCover.scss";

class PostCover extends Component {
  render() {
    const { postNode, coverHeight  } = this.props;
    return (
      <img src={postNode.imageUri} style={{ height: coverHeight, width: "100%" }} />
      )  
    }
  }
  
  export default PostCover;
  