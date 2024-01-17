import { Avatar } from '@mui/material'
import React from 'react'
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import Repeat from '@mui/icons-material/Repeat';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Publish from '@mui/icons-material/Publish';
import "./Post.css";

function Post() {
  return (
    <div className='post'>
      <div className='post--avatar'>
        <Avatar />
      </div>
      <div className='post--body'>
        <div className='post--header'>
          <div className='post--headerText'>
            <h3>プログラミングチュートリアル
              <span className='post--headerApecial'>
                <VerifiedUser className='post--badge' />
                @shin_Enginner
              </span>
            </h3>
          </div>
          <div className='post--headerDescription'>
            <p>Reactなう。</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" />
        <div className='post--footer'>
          <ChatBubbleOutline fontSize='small'/>
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <Publish fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post