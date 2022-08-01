import React from 'react';
import CoverVideo from '../../media/music1.mp4';
import '../cover/cover.css';

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={CoverVideo} autoPlay loop muted />
      <h1 className="cover-h1">LA MÚSICA TE HACE FLUIR</h1>
      



    </div>
  )
}

export default Cover