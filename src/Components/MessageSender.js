import React from 'react';
import './MessageSender.css';
import {Avatar } from '@material-ui/core';
import user from '../Media/user.jpg';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';

function MessageSender() {
const handleSubmit = (e) =>{
e.preventDefault();
}

    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
            <Avatar src={user} />
            <form>
                <input type='text' placeholder={`What's on your mind ?`}   className='messageSender_input'/>
                <input type='text'  placeholder='image URL (optional)' className='messageSender_input'/>
                <button onClick={handleSubmit} type='submit'> 
                    Submit
                </button>
            </form>
            </div>
            <div className='messageSender_bottom'>
              <div className='messageSender_option'>
                 <Videocam style={{color:'red'}} /> 
                 <h3>Live Video</h3>  
              </div>
              <div className='messageSender_option'>
                 <PhotoLibrary style={{color:'green'}} /> 
                 <h3>Photo/Video</h3>  
              </div>
              <div className='messageSender_option'>
                 <InsertEmoticon style={{color:'orange'}} /> 
                 <h3>Feeling/Activity</h3>  
              </div>
            </div>
        </div>
    );
}

export default MessageSender;
