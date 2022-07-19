import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { memo, useState } from 'react'
import Container from '../common/Container'
import SpaceBetween from '../common/SpaceBetween'
import IconSignIn from '../assets/images/Sign-in'
import PieChart from 'react-native-pie-chart'
import FlexRow from '../common/FlexRow'

type RateProps = {
    id: number
    title: string
    rate: number
    color: string
}

const RankDetail = (props: any) => {
    const value = props?.route?.params?.value
    const [dataRate, setDataRate] = useState<any>([
        {
            id: 0,
            title: 'Rate of success at the first attempt',
            rate: value?.rate1,
            color: '#66FF00',
        },
        {
            id: 1,
            title: 'Rate of success at the second attempt',
            rate: value?.rate2,
            color: '#FF99FF',
        },
        {
            id: 2,
            title: 'Rate of incorrect answer',
            rate: value?.rate3,
            color: '#FFEB3B',
        },
    ])

    const series = [value?.rate1, value?.rate2, value?.rate3]
    const sliceColor = ['#66FF00', '#FF99FF', '#FFEB3B']

    return (
        <Container style={{
            backgroundColor: '#232633',
        }}>
            <SpaceBetween style={{
                paddingHorizontal: 16
            }} >
                <TouchableOpacity onPress={() => props.navigation.pop()} >
                    <Text style={{
                        fontSize: 30,
                        color: 'white'
                    }}>
                        {'<<'}
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 30, color: 'white' }}>{value?.name}</Text>
                <Text style={{ fontSize: 30 }}>
                    {'    '}
                </Text>
            </SpaceBetween>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginVertical: 16
            }}>
                <Image source={IconSignIn.avatar} style={{ width: 50, height: 50, borderRadius: 50 }} />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 24 }}>
                        RANK
                    </Text>
                    <Text style={{ color: '#286', fontSize: 24 }}>
                        {value?.id + 1}
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 24 }}>
                        NUMBER
                    </Text>
                    <Text style={{ color: '#286', fontSize: 24 }} >
                        {value?.numberQuiz}
                    </Text>
                </View>
            </View>
            <View style={{
                alignItems: 'center'
            }}>
                <PieChart
                    widthAndHeight={220}
                    series={series}
                    sliceColor={sliceColor}
                />
            </View>
            {
                dataRate && dataRate.map((item: RateProps) => {
                    return (
                        <SpaceBetween key={`-item.id${item?.id}`} style={{ margin: 16 }}>
                            <FlexRow>
                                <View style={{ width: 20, height: 20, borderRadius: 30, backgroundColor: item.color }} />
                                <Text style={{ color: item.color, paddingLeft: 8 }}>
                                    Rate of success at the first attempt
                                </Text>
                            </FlexRow>
                            <Text style={{ color: item.color }}>
                                {item.rate}%
                            </Text>
                        </SpaceBetween>
                    )
                })
            }

        </Container>
    )
}

export default memo(RankDetail)