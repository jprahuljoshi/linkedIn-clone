import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed/Feed';
import { auth } from './Firebase/firebase';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout)
      }
    })
  }, [])

  return (
    <div className="app">

      {/* Header */}
      <Header></Header>

      {!user ? <Login></Login>
        :
        <div className='app__body'>
          {/* Sidebar */}
          <Sidebar></Sidebar>

          {/* feed */}
          <Feed></Feed>

          {/* Widgets */}
          <Widgets></Widgets>
        </div>
      }


    </div >
  );
}

export default App;
