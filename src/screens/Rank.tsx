import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Container from '../common/Container'
import FlexRow from '../common/FlexRow'
import { useSelector } from 'react-redux'
import SpaceBetween from '../common/SpaceBetween'
import IconSignIn from '../assets/images/Sign-in'
import { useNavigation } from '@react-navigation/native'
import NavigationConstants from '../navigation/NavigationContants'

const fakeData = [
    {
        id: 0,
        name: 'Chery',
        rate: '90%',
        numberQuiz: 56,
        rate1: 90,
        rate2: 5,
        rate3: 5,
        avatar: IconSignIn.avatar
    },
    {
        id: 1,
        name: 'Harry',
        rate: '87%',
        numberQuiz: 54,
        rate1: 90,
        rate2: 5,
        rate3: 5,
        avatar: IconSignIn.avatar
    },
    {
        id: 2,
        name: 'Lisa',
        rate: '87%',
        numberQuiz: 12,
        rate1: 80,
        rate2: 10,
        rate3: 10,
        avatar: IconSignIn.avatar
    },
    {
        id: 3,
        name: 'Amy',
        rate: '85%',
        numberQuiz: 98,
        rate1: 70,
        rate2: 15,
        rate3: 15,
        avatar: IconSignIn.avatar
    },
    {
        id: 4,
        name: 'H.K',
        rate: '85%',
        numberQuiz: 68,
        rate1: 60,
        rate2: 30,
        rate3: 10,
        avatar: IconSignIn.avatar
    },
]

const Rank = () => {
    const navigation = useNavigation()
    const userData = useSelector(state => state.userInfor)
    const numberOfQuizzes = useSelector(state => state.numberOfQuiz)
    return (
        <Container style={{
            backgroundColor: '#232633',
        }}>
            <Text style={{
                fontSize: 30,
                color: 'white',
                paddingLeft: 16,
            }}>
                RANKING
            </Text>

            <SpaceBetween style={{
                padding: 16,
            }}>
                <FlexRow>
                    <View style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        marginRight: 6,
                        backgroundColor: 'grey'
                    }} />
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontWeight: '700',
                            color: 'white',
                            fontSize: 20
                        }}>
                            {userData}
                        </Text>
                        <Text
                            style={{
                                fontWeight: '700',
                                color: 'white',
                                fontSize: 20
                            }}
                        >
                            {'70%'}
                        </Text>
                    </View>
                </FlexRow>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: '#082',
                        fontWeight: '700',
                        fontSize: 20
                    }}>
                        RANK
                    </Text>
                    <Text style={{
                        color: '#082',
                        fontWeight: '700',
                        fontSize: 20
                    }}>
                        {numberOfQuizzes}
                    </Text>
                </View>
            </SpaceBetween>

            <ScrollView style={{
                paddingHorizontal: 16
            }}>
                {
                    fakeData.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate(NavigationConstants.RankDetail, { value: item })}
                                key={`-id${item?.id}-${index}`}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#4C536F',
                                    marginVertical: 8,
                                    padding: 8,
                                    borderRadius: 8
                                }}
                            >
                                <FlexRow>
                                    <Text style={{
                                        fontSize: 20,
                                        color: index === 0 ? '#082' : index === 1 ? 'yellow' : index === 2 ? 'pink' : 'white',
                                    }}>
                                        {index + 1}
                                    </Text>
                                    <Image source={item.avatar} style={{ width: 30, height: 30, borderRadius: 50, marginHorizontal: 8 }} />
                                    <Text style={{
                                        fontSize: 20,
                                        color: index === 0 ? '#082' : index === 1 ? 'yellow' : index === 2 ? 'pink' : 'white',
                                    }}>
                                        {item?.name}
                                    </Text>
                                </FlexRow>
                                <Text style={{
                                    fontSize: 20,
                                    color: index === 0 ? '#082' : index === 1 ? 'yellow' : index === 2 ? 'pink' : 'white',
                                }}>
                                    {item?.rate}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </Container>
    )
}

export default Rank