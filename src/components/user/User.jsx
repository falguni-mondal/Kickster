import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
const User = () => {

    const user = useSelector(state => state.loggedInUser.user)

    return (
        user ? user.role === 'user' ? user.isVerified ?
            <section className="user-section">
                {
                    <Outlet />
                }
            </section> :
            <Navigate to="/verify" />
            :
            <Navigate to="/login" /> : <Navigate to="/login" />
    )
}

export default User