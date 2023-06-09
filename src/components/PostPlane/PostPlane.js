import React from 'react'
import './PostPlane.css'
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'


export default function PostPlane() {
  return (
    <div className='postPlaneBox'>
      <AddPost/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
