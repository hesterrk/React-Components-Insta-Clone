import React, {useState} from 'react';



const LikeSection = props => {

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={() => setLikeState(likeState + 1)}   />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
      likes</p>
</div>
  )
};

export default LikeSection;
