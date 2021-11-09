import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';

const App = () => {
  return (
    <div className='app'>
      
      {/*Header */}
<Header />

      {/*App Body */}
<div className='app_body'>

 {/*Sidebar */}
<Sidebar />

      {/*Feed */}
      <Feed />

      {/*Widgets */}
</div>
     
    </div>
  );
}

export default App;