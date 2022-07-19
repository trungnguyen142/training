import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import NavigationConstants from './NavigationContants'
import Rank from '../screens/Rank'
import Quiz from '../screens/Quiz'
import My from '../screens/My'
import SignIn from '../screens/Sign-in'
import AddQuiz from '../screens/AddQuiz'
import RankDetail from '../screens/RankDetail'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 90,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#373B50',
                    borderTopWidth: 0.5,
                    paddingTop: 10,
                    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 1,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.84,
                    elevation: 10,
                },
            }}
        >
            <Tab.Screen
                name={NavigationConstants.Rank}
                component={Rank}
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        <View style={{ padding: 8, backgroundColor: focused ? '#232633' : '#373B50', borderRadius: 8 }}>
                            <Text style={{ color: focused ? '#29E3A8' : color, fontWeight: 'bold', fontSize: 20 }}>RANK</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationConstants.Quiz}
                component={Quiz}
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        <View style={{ padding: 8, backgroundColor: focused ? '#232633' : '#373B50', borderRadius: 8 }}>
                            <Text style={{ color: focused ? '#29E3A8' : color, fontWeight: 'bold', fontSize: 20 }}>QUIZ</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationConstants.My}
                component={My}
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        <View style={{ padding: 8, backgroundColor: focused ? '#232633' : '#373B50', borderRadius: 8 }}>
                            <Text style={{ color: focused ? '#29E3A8' : color, fontWeight: 'bold', fontSize: 20 }}>MY</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>


    )
}


const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={NavigationConstants.OnBoarding}
        >
            <Stack.Screen
                name={NavigationConstants.Main}
                component={MainTab}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={NavigationConstants.AddQuiz}
                component={AddQuiz}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={NavigationConstants.RankDetail}
                component={RankDetail}
                options={{
                    headerShown: false,
                }}
            />



        </Stack.Navigator>
    )
}

export default AppNavigator