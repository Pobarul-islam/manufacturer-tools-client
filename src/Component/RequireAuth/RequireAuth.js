import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../Firebase/firebase.init'
import Loading from '../Loading/Loading'

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    if (user) {
        return children

    }
    if (loading) {
        return <Loading />
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

}

export default RequireAuth