import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = ({profilePic, message, timestamp, username, image}) => {
    return (
        <div className='feed'>
            {/*Story Reel */}
              <StoryReel />

            {/*Messenge Sender */}
              <MessageSender />

          {/*Post */}
          <Post 
          profilePic='https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          message='Beuty in nature'
          timestamp='Timestamp'
          username='Ann Marie'
          image='https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          />
          <Post 
          profilePic='https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          message='Looooove'
          timestamp='time'
          username='Sue N'
          image='https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          />
          <Post 
          profilePic='https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          message='A cup of coffee a day keeps the hangover away ...'
          timestamp='Time'
          username='John K.'
          image='https://images.unsplash.com/photo-1518057111178-44a106bad636?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          />
        </div>
    );
}

export default Feed;
