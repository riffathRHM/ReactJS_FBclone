import React from 'react'
import './post.css';

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
               <div className="postTopDetails">
               <img src="/images/image_cook.jpg" alt="" className="postImage" />
               <span className="postUserName">Cook Master</span>
               <span className="postTime">5 mins ago</span>
               </div>
            </div>

            <div className="postCenter">
               <div className="postCaption">
                Hello Welcome all Mr.cook..
               </div>
               <img src="/images/post_img.jpg" alt="" className="postedImage" />
            </div>
            

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.png" alt="" className="reactionPic" />
                    <img src="/images/heart.jpg" alt="" className="reactionPic" />
                    <img src="/images/sad.png" alt="" className="reactionPic" />
                    <img src="/images/angery.png" alt="" className="reactionPic" />
                    <span className="likeCount">You and 225 </span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">50 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
