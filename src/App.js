import './App.css';
import React, { Suspense } from 'react';
import { lazy } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Routes } from 'react-router-dom'
import { WithRouter } from './hoc/withRouter';
import Sidebar from './components/Sidebar/Sidebar';
import Friends from './components/Friends/Friends';
import Photo from './components/Photo/Photo';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersComponent from './components/Users/UsersComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';
import preloader from './images/preloader.gif'
import { initializeApp } from './redux/appReducer';
const ProfileComponent = lazy(() => import('./components/Profile/ProfileComponent'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
  componentDidMount () {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <img src={preloader} />
    }
    return (
      <div className="app_wrapper">
        <HeaderComponent />
        <Sidebar />
        <div className='app_wrapper__content'>
          <Suspense fallback={<>loading...</>}>
            <Routes>
              <Route path='/profile' element={<ProfileComponent />} />
              <Route path='profile/:userId' element={<ProfileComponent />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/friends' element={<Friends />} />
              <Route path='/photo' element={<Photo />} />
              <Route path='/news' element={<News />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersComponent />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense >
        </div>
      </div>);
  }
}

let mapStateToProps = (state) => ({
  initialized : state.app.initialized
})

export default compose(WithRouter, connect(mapStateToProps, {initializeApp}))(App);
