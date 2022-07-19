import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React, { memo } from 'react'

interface Props {
    children?: React.ReactElement | React.ReactElement[]
    style?: ViewStyle
}

const SpaceBetween = (props: Props) => {
    const { children, style } = props
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})

export default memo(SpaceBetween)
