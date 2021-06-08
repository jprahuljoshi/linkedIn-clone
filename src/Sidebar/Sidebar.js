import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './Sidebar.css'

const Sidebar = () => {

    const user = useSelector(selectUser)

    const recentItem = (topic) => {
        return (
            <div className='sidebar__recentItem'>
                <span className='sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1508614999368-9260051292e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt=''></img>
                <Avatar src={user?.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>256</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>251</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('nodejs')}
                {recentItem('programming')}
                {recentItem('developer')}
                {recentItem('motivation')}
            </div>
        </div>
    )
}

export default Sidebar
