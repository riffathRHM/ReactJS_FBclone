//make a functional component type rfc and type enter
import React from 'react';
import LeftPlane from '../../components/LeftPlane/LeftPlane_N';
import NavBar from '../../components/Navigation/NavBar';
import PostPlane from '../../components/PostPlane/PostPlane';
import RightPlane from '../../components/RightPlane/RightPlane';
import './home.css';



export default function Home() {


  return (
   
    <div>
       <NavBar/>
       <div className="bottomContainer">
       <LeftPlane/>
       <PostPlane/>
       <RightPlane/>
       
       </div>
       
    </div>
  
   
    
  )
}
