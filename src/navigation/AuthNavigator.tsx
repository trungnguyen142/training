import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NavigationConstants from './NavigationContants'
import SignIn from '../screens/Sign-in'

const Stack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={NavigationConstants.OnBoarding}
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator