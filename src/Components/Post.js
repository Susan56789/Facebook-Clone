import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUpSharp } from '@material-ui/icons';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilePic} className='post_avatar' />
                <div className='post_topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='post_bottom'>
                <p>{message}</p>
            </div>
            <div className='post_image'>
                <img src={image} alt=' ' />
            </div>
            <div className='post_options'>
                <div className='post_option'>
                    <ThumbUpSharp />
                    <p>Like</p>
                </div>
                <div className='post_option'>
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className='post_option'>
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className='post_option'>
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    );
}

export default Post;
