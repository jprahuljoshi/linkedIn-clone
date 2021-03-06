import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './HeaderOptions.css'

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {

    const user = useSelector(selectUser)

    return (
        <div onClick={onClick} className='headerOptions'>
            {Icon && <Icon className='headerOptions__icon'></Icon>}
            {avatar && (<Avatar className='headerOptions__icon' src={user?.photoUrl}>{user?.email[0]}</Avatar>)}
            <h3 className='headerOptions__title'>{title}</h3>
        </div>
    )
}

export default HeaderOptions
