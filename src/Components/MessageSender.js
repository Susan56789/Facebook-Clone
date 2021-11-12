import React, {useState} from 'react';
import './MessageSender.css';
import {Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function MessageSender() {
const [input, setInput ] =useState('');
const [imageUrl, setImageUrl] = useState('');

const handleSubmit = (e) =>{
e.preventDefault();

}

const [{user}, dispatch] = useStateValue();

    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
            <Avatar src={user.photoURL} />
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)}
                 type='text' placeholder={`What's on your mind ${user.displayName} ?`}   className='messageSender_input'/>
                <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                type='text'  placeholder='image URL (optional)' className='messageSender_input'/>
                <button type='submit' onSubmit={handleSubmit}> 
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
