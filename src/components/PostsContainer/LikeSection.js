import React from 'react';



const LikeSection = props => {

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <button onClick={() => props.setLikeState((props.likeState) + 1)} >
        <i className="far fa-heart" />
        </button>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {props.likeState}
      likes</p>
</div>
  )
};

export default LikeSection;
