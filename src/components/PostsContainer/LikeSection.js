// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

let clicks = true;

const LikeSection = props => {

  const [ likes, newLikes ] = useState(24);
  
  const likeBtn = evt => {
    if(clicks === true) {
      newLikes(likes + 1);
      clicks = false;
    }
    else {
      newLikes(likes - 1);
      clicks = true;
    }
  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper" onClick = {likeBtn}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{likes} likes</p>
    </div>
  )
};

export default LikeSection;
