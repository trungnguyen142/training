import React, { useMemo, memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useClock from '../Hooks/useClock'
const TestCustom = () => {
    const [time, session] = useClock()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 30 }}>
                {time}
            </Text>
            <Text style={{ fontSize: 30, paddingLeft: 10 }}>
                {session}
            </Text>

        </View>
    )
}

export default (TestCustom)

const styles = StyleSheet.create({

})
