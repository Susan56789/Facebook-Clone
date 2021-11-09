import React from 'react';
import './storyReel.css';
import Story from './Story';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            {/*Story */}
         <Story image="https://images.unsplash.com/photo-1551377130-380f4fa9bb63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFyeSUyMGphbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  profileSrc='https://images.unsplash.com/photo-1616240534256-78c03c75f73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hcnklMjBqYW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' title='Mary Jane' />
            {/*Story */}
            <Story image='https://images.unsplash.com/photo-1583068040946-5d67270e7abf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hcnklMjBqYW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'  profileSrc='https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' title='John Mark' />
            {/*Story */}
            <Story image='https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'  profileSrc='https://images.unsplash.com/photo-1510832198440-a52376950479?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' title='Esther Jones' />
            {/*Story */}
            <Story image='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'  profileSrc='https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' title='Elijah K' />
            {/*Story */}
            <Story image='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'  profileSrc='https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' title='Mercy O.' />
        </div>
    );
}

export default StoryReel;
