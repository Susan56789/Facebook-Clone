import React, {useState, useEffect} from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';

const Feed = ({profilePic, message, timestamp, username, image}) => {
  const [posts, setPosts]  =useState([]);
  //realtime database connection
  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot((snapShot) => (
      setPosts(snapShot.docs.map((doc) => ({data: doc.data(), id: doc.id })))
  ));
}, []);
        
return (
        <div className='feed'>
            {/*Story Reel */}
              <StoryReel />

            {/*Messenge Sender */}
              <MessageSender />

          {/*Post */}
          {posts.map((post)=>(
            <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            />
          ))}
        </div>
    );
}

export default Feed;
