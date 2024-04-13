import React from 'react'
import { useState } from 'react';

function ContadorLikes() {
  
  const [likes, setLikes] = useState(0);

  
  const handleLike = () => {
    setLikes(likes + 1);
    localStorage.setItem('likes', likes + 1);
  };


  const handleDislike = () => {
    setLikes(likes - 1);
    localStorage.setItem('likes', likes - 1);
  };

  return (
    <div className='divContadorLikes'>
      <h2>Cantidad de Likes: {likes}</h2>
      <div className='buttons'>
        <button onClick={handleLike} style={{
            margin:'0 10px 0 10px',
            width:'30px',
            height:'30px',

          }}>👍</button>
        <button onClick={handleDislike} style={{
            margin:'0 10px 0 10px',
            width:'30px',
            height:'30px',
          }}>👎</button>
      </div>
    </div>
  );
}

export default ContadorLikes;