import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeofrey.ochieng.1485%2Fposts%2F1249892498846355&show_text=false&width=500"
          scrolling="no"
         frameborder="0" 
         allowfullscreen="true" 
         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
         width='344'
            style={{border:'none', overflow:'hidden'}}
            allowTransparency='true'
            title='frame1'
         ></iframe>
        
            <iframe
             src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D175324501457715%26id%3D100069404980455&show_text=true&width=500" 
              frameborder="0"
             allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            width='344'
            style={{border:'none', overflow:'hidden'}}
            scrolling = 'no'
            allowTransparency='true'
            title='frame1'
            ></iframe>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FKaziPataKe%2Fposts%2F1643303215840222&show_text=true&width=500" 
             scrolling="no"
             frameborder="0" 
             allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            width='344'
            style={{border:'none', overflow:'hidden'}}
            allowTransparency='true'
            title='frame1'
            ></iframe>
        </div>
    );
}

export default Widgets;
