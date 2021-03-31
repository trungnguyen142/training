import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Main from './Main'
import Profile from './Profile'
import EditProfile from './EditProfile'
import MyProfile from './MyProfile'
import PersonalInfo from './PersonalInfo'
import EditProfileItem from './EditProfileItem'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import RootReducer from './RootReducer'
const Stack = createStackNavigator();
function App() {
  const store = createStore(RootReducer)
  return (
    <Provider store = {store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="main" screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="myprofile" component={MyProfile} />
      <Stack.Screen name="editprofile" component={EditProfile} />
      <Stack.Screen name="personalinfo" component={PersonalInfo} />
      <Stack.Screen name="editprofileitem" component={EditProfileItem} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default App;