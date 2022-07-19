import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../common/Container'
import SpaceBetween from '../common/SpaceBetween'
import FlexRow from '../common/FlexRow'
import { useDispatch, useSelector } from 'react-redux'
import PieChart from 'react-native-pie-chart'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { logOut, userInfor } from '../features/userSlice'

const My = () => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.userInfor)
    const numberOfQuizzes = useSelector(state => state.numberOfQuiz)
    const series = [90, 5, 5]
    const sliceColor = ['#66FF00', '#FF99FF', '#FFEB3B']

    const onLogout = async () => {
        await GoogleSignin.signOut()
        dispatch(userInfor(null))
    }

    return (
        <Container style={{
            backgroundColor: '#232633',
        }}>

            <SpaceBetween style={{
                paddingHorizontal: 16
            }}>
                <FlexRow>
                    <View style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        marginRight: 6,
                        backgroundColor: 'grey'
                    }} />
                    <Text style={{
                        fontWeight: '700',
                        color: '#081',
                        fontSize: 20
                    }}>
                        {userData}
                    </Text>
                </FlexRow>
                <TouchableOpacity
                    onPress={onLogout}
                >
                    <Text style={{
                        color: 'grey',
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </SpaceBetween>

            <FlexRow style={{
                padding: 16
            }}>
                <View style={{
                    width: '50%',
                    // alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                    }}>
                        RANK
                    </Text>
                    <Text style={{
                        fontSize: 24,
                        paddingTop: 8,
                        color: '#29E3A8'
                    }}>
                        32
                    </Text>
                </View>
                <View style={{
                    width: '50%',
                    // alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                    }}>
                        NUMBER OF QUIZ
                    </Text>
                    <Text style={{
                        fontSize: 24,
                        paddingTop: 8,
                        color: '#29E3A8'
                    }}>
                        {numberOfQuizzes}
                    </Text>
                </View>
            </FlexRow>
            <View style={{
                alignItems: 'center'
            }}>
                <PieChart
                    widthAndHeight={220}
                    series={series}
                    sliceColor={sliceColor}
                />
            </View>
        </Container>
    )
}

export default My