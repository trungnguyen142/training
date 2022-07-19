import { View, Text, StyleSheet, LayoutChangeEvent, ViewStyle } from 'react-native'
import React, { memo } from 'react'

interface Props {
    children?: React.ReactElement | React.ReactElement[]
    style?: ViewStyle
    onLayout?: ((event: LayoutChangeEvent) => void) | undefined
}

const FlexRow = (props: Props) => {
    const { children, style, onLayout } = props
    return (
        <View onLayout={onLayout} style={[styles.containerFlex, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({

    containerFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },

})

export default memo(FlexRow)