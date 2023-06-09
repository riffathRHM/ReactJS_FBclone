import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import './navBar.css'
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
        {/* The <span> tag is an inline container used to mark up a part of a text, or a part of a document. */}
            <span className="logo">facebook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='SearchIcon'/>
                <input placeholder='Search' className="searchInput" />
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">Home</span>
                <span className="navBarLink">Profile</span>
            </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                <PersonIcon />
                <span className="iconTag">3</span>
                </div>
                <div className="navBarIcon">
                    <NotificationsIcon/>
                    <span className="iconTag">5</span>
                </div>
                <div className="navBarIcon">
                    <SettingsIcon/>
                    <span className="iconTag">2</span>
                </div>
            </div>
            <div className="pic">
                <img src="/images/img_1.jpg" alt="" className="profilePicImage" />
            </div>
            <div className="darkMode">
            <Switch {...label} defaultChecked />
            </div>
        </div>
    </div>  
  )
}
