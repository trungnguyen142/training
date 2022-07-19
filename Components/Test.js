import React, { useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import LottieView from 'lottie-react-native'
const Test = () => {
  const animation = React.useRef(null)
  const [checkOut, setCheckOut] = useState(false)
  const handleCheck = () => {
    if (checkOut) {
      animation.current.play(144, 247)
      setCheckOut(false)
    }
    else {
      animation.current.play(0, 143)
      setCheckOut(true)

    }

  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableWithoutFeedback
        onPress={() => handleCheck()}
      >
        <LottieView
          ref={animation}
          source={require('../Assets/JSon/button1.json')}
          loop={false}
          style={{ width: 100, height: 100 }}
        />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Test
