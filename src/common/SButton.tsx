import { TouchableOpacity, ViewStyle, StyleSheet, View, Image, ImageStyle, Text, TextStyle, ImageSourcePropType } from 'react-native'
import React from 'react'

interface ButtonProps {
    onPress: () => void
    style?: ViewStyle
    source: ImageSourcePropType
    imageStyle?: ImageStyle
    title: string
    textStyle?: TextStyle
}

const SButton = (props: ButtonProps) => {
    const { onPress, source, style, title, textStyle, imageStyle, ...rest } = props
    return (
        <TouchableOpacity
            {...rest}
            onPress={onPress}
            activeOpacity={0.5}
            style={[styles.container, style]}
        >
            <Image source={source} style={[styles.img, imageStyle]} />
            <Text style={textStyle}>
                {title}
            </Text>
            <View style={[styles.img]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        paddingHorizontal: 16,
        height: 48,
    },

    img: {
        width: 20,
        height: 20,
    },
})

export default SButton