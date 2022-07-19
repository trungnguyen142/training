import { View, StyleSheet, ViewStyle, StatusBar } from 'react-native'
import React, { ReactElement } from 'react'

interface ContainerProps {
    children: ReactElement | ReactElement[]
    style?: ViewStyle

}

const Container = (props: ContainerProps) => {
    const { children, style } = props
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 48
    },
})

export default Container