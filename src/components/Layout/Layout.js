import React from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import './Layout.css' 

const Layout = props => {
    // const user = useSelector(state => state.users.user);
    
    return (
        <div className='wholePage'>
            <div className='header'>
                <p className='logo'>Flea Market</p>
                <div>
                    {
                        // user ?
                        // <>
                        //     <span>Hello, {user.displayName}</span>
                        //     <NavLink className='menuLink' to='/add'>Add new item</NavLink>
                        //     or
                        //     <NavLink className='menuLink' to='/logout'>Logout</NavLink>
                        // </>
                        // :
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