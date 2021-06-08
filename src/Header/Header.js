import React from 'react'
import './Header.css'
import HeaderOptions from '../HeaderOptions/HeaderOptions';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../Firebase/firebase';

const Header = () => {

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className='header'>

            <div className='header__left'>
                <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt='LinkedIn'></img>

                <div className='header__search'>
                    <SearchIcon></SearchIcon>
                    <input type='text' placeholder='Search'></input>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOptions Icon={HomeIcon} title='Home'></HeaderOptions>
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'></HeaderOptions>
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'></HeaderOptions>
                <HeaderOptions Icon={ChatIcon} title='Messaging'></HeaderOptions>
                <HeaderOptions Icon={NotificationsIcon} title='Notification'></HeaderOptions>
                <HeaderOptions avatar={true} title='me'
                    onClick={logoutOfApp}></HeaderOptions>
            </div>
        </div>
    )
}

export default Header
