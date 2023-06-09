import React from 'react'
import './RightPlane.css'

export default function RightPlane() {
  return (
   <div className="rightPlaneBOx">
    <div className="rightPlaneContainer">
      <div className="advertismentContainer">
        <span className="sponserd">Sponsered</span>
        <img src="/images/ad_image.jpg" alt="" className="adImage" />
        <div className="adText">
          Order Your Food & Enjoy.......
        </div>
        <div className="birthdayContainer">
          <img src="/images/cake.jpg" alt="" className="birthdayImage" />
        </div>
        <div className="adText">
          Say Happy Birthday .........
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFrinedImageContaner">
              <img src="images/man.jpg" alt="" className="onlineFrinedImg" />
              <span className='OnlineFriendStatus'></span>
            </div>
            <span className="onlineFriendName">James Adem</span>

            
          </li>

          <li className="onlineFriend">
            <div className="onlineFrinedImageContaner">
              <img src="images/man2.jpg" alt="" className="onlineFrinedImg" />
              <span className='OnlineFriendStatus'></span>
            </div>
            <span className="onlineFriendName">Alexender</span>

            
          </li>

          <li className="onlineFriend">
            <div className="onlineFrinedImageContaner">
              <img src="images/man3.jpg" alt="" className="onlineFrinedImg" />
              <span className='OnlineFriendStatus'></span>
            </div>
            <span className="onlineFriendName">Warner</span>

            
          </li>

          <li className="onlineFriend">
            <div className="onlineFrinedImageContaner">
              <img src="images/man4.jpg" alt="" className="onlineFrinedImg" />
              <span className='OnlineFriendStatus'></span>
            </div>
            <span className="onlineFriendName">Sehan</span>

            
          </li>
        </div>
      </div>
    </div>
   </div>
  )
}
