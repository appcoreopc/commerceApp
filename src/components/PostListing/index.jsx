import React from "react";
import PostPreview from "../PostPreview";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];  

    this.props.postEdges.forEach(postEdge => {    
      
      postList.push({
        id: postEdge.node.id,
        description: postEdge.node.description,
        name : postEdge.node.name,
        imageUri : postEdge.node.imgUri,
        productUri : postEdge.node.productUri
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--8 mobile-fix">
          {postList.map(post => (
            <PostPreview key={post.name} postInfo={post} />            
          ))}
        </div>
      </div>
    );
  }
}

export default PostListing;
