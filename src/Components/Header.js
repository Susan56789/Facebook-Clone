import React from 'react';
import './Header.css';
import logo from '../Media/download.png';
import { Search, Home, SupervisedUserCircle, Storefront, Flag, Subscriptions, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';


const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
<img src={logo} alt='logo' />
<div className='header_input'>
    <Search />
    <input placeholder='Search Facebook' type='text' />
</div>
            </div>

<div className='header_middle'>
   <div className='header_options' id='header_option_active'>
<Home fontSize='large' />
   </div>
   <div className='header_options'>
<Flag fontSize='large' />
   </div>
   <div className='header_options'>
<Subscriptions fontSize='large' />
   </div>
   <div className='header_options'>
<Storefront fontSize='large' />
   </div>
   <div className='header_options'>
<SupervisedUserCircle fontSize='large' />
   </div>
            </div>

            <div className='header_right'>
<div className='header_info'>
<Avatar />
<h4>Susan Wairimu</h4>
</div>

<IconButton>
    <Add />
</IconButton>
<IconButton>
    <Forum />
</IconButton>
<IconButton>
    <NotificationsActive />
</IconButton>
<IconButton>
    <ExpandMore />
</IconButton>
            </div>
        </div>
    ); 
}

export default Header;
