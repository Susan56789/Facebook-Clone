import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

function Post({profilePic, image, userName, timestamp,messageSender}) {
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilePic}  className='post_avatar'/>
                <div className='post_topInfo'>
            <h3>{userName}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString() }</p>
                </div>
            </div>
            <div className='post_bottom'>

            </div>
        </div>
    );
}

export default Post;
