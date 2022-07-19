import React, { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigator'

const Navigation = () => {
    const userName = useSelector(state => state.userInfor)
    return userName != null ?
        (
            <AppNavigator />
        ) : (
            <AuthNavigator />
        )
}

export default Navigation