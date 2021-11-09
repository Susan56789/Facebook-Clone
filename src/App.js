import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

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

      {/*Widgets */}
</div>
     
    </div>
  );
}

export default App;