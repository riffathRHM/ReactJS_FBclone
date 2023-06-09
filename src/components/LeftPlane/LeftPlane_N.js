import React from 'react'
import './leftPlane.css'
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPlane() {
  return (
    <div className='leftPlaneBox'>
      <div className="leftPlaneContainer">
        <div className="leftPlaneMenu">
          <li className="leftPlaneIcon">
              <MessageIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Message </span>
          </li>

          <li className="leftPlaneIcon">
              <GroupIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Grops </span>
          </li>

          <li className="leftPlaneIcon">
              <RssFeedIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Feed </span>
          </li>

          <li className="leftPlaneIcon">
              <FlagIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Pages </span>
          </li>

          <li className="leftPlaneIcon">
              <CalendarMonthIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Events </span>
          </li>

          <li className="leftPlaneIcon">
              <BuildIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Settings </span>
          </li>

          <li className="leftPlaneIcon">
              <SportsEsportsIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Games </span>
          </li>

          <li className="leftPlaneIcon">
              <NewspaperIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> News </span>
          </li>
          
          <li className="leftPlaneIcon">
              <WorkOutlineIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Jobs </span>
          </li>

          <li className="leftPlaneIcon">
              <AddShoppingCartIcon className='leftPlaneMenuIcon'/>
              <span className="leftPlaneMenuText"> Market </span>
          </li>
          <hr/>
          <div className="pagesYouLiked">
            <h3>liked Pages</h3>
          </div>
          <div className="pageList">
          <li className="pageListItem">
            <img src="/images/image_2.png" alt="" className="pagePic" />
            <span className="pageName">JS Coding</span>
          </li>
          <li>
            <img src="/images/image_T.jpg" alt="" className="pagePic" />
            <span className="pageName">SL Travels</span>
          </li>
          <li>
            <img src="/images/image_flo.png" alt="" className="pagePic" />
            <span className="pageName">Flowers</span>
          </li>
          <li>
            <img src="/images/image_cri.jpg" alt="" className="pagePic" />
            <span className="pageName">Cricket</span>
          </li>
          <li>
            <img src="/images/image_cook.jpg" alt="" className="pagePic" />
            <span className="pageName">Cooking</span>
          </li>
          <li>
            <img src="/images/image_foot.png" alt="" className="pagePic" />
            <span className="pageName">Football</span>
          </li>
          <li>
            <img src="/images/image_cinama.jpg" alt="" className="pagePic" />
            <span className="pageName">Cinama</span>
          </li>
          </div>
        </div>
      </div>
    </div>
  )
}
