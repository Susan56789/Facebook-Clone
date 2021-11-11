import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
    return (
        <div className='feed'>
            {/*Story Reel */}
              <StoryReel />

            {/*Messenge Sender */}
              <MessageSender />

          {/*Post */}
          <Post />
          <Post />
          <Post />
        </div>
    );
}

export default Feed;
