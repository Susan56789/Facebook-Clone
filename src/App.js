import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
const App = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app'>
      {!user ?
        (<Login />)
        :
        (<>
          {/*Header */}
          <Header />

          {/*App Body */}
          <div className='app_body'>

            {/*Sidebar */}
            <Sidebar />

            {/*Feed */}
            <Feed />

            {/*Widgets */}
            <Widgets />
          </div>
        </>
        )}

    </div>
  );
}

export default App;