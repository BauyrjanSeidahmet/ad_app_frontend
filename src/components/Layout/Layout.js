import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../store/actions/usersActions';
import './Layout.css' 

const Layout = props => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutUser());
    };
    
    return (
        <div className='wholePage'>
            <div className='header'>
                <p className='logo'>Flea Market</p>
                <div>
                    {
                        user ?
                        <>
                            <span>Hello, {user.displayName}</span>
                            <NavLink className='menuLink' to='/add'>Add new item</NavLink>
                            or
                            <span className='logoutBtn' onClick={logout}>Logout</span>
                        </>
                        :
                        <div>
                            <NavLink className='menuLink' to='/register'>Register</NavLink>
                            or
                            <NavLink className='menuLink' to='/login'>Sign in</NavLink>
                        </div>
                    }
                </div>
            </div>
            <hr/>
            <main className='LayoutContent'>{props.children}</main>
        </div>
    )
}

export default Layout