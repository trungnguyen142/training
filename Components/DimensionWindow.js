import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const DimensionWindow = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box]}>
        <Text style={styles.title}>React Native is Awesome</Text>
        <Text style={styles.text}>
          Là chương trình phần mềm trên điện thoại di động được viết dựa trên
          nền tảng web (html5, css3, javascript), bản chất hoàn toàn là ứng dụng
          web nhưng có thêm được các tính năng thao tác phần hệ điều hành như
          tập tin, truy cập máy ảnh, GPS hoặc các cảm biến như con quay hồi
          chuyển, gia tốc kế…Toàn bộ những thứ này đều được bao bọc bởi một lớp
          ứng dụng Native mà nổi bật là Phonegap/Cordova.
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DimensionWindow;

const {height, width} = Dimensions.get('window'); // device height and width
// ui được thiết kế cho size màn hình là (360x592)
const standardWidth = 360;
const standardHeight = 592;
const boxWidth = (300 / standardWidth) * width;
const boxHeight = (450 / standardHeight) * height;
const textFontSize = (14 / standardWidth) * width;
const buttonTextFontSize = (14 / standardWidth) * width;
const titleFontSize = (20 / standardWidth) * width;
const buttonWidth = (150 / standardWidth) * width;
const buttonHeight = (49 / standardHeight) * height;
const lineHeight = (25 / standardHeight) * height;
const marginBottom = (10 / standardHeight) * height;
const padding = (10 / standardWidth) * width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: boxWidth,
    height: boxHeight,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: padding,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  title: {
    textAlign: 'center',
    fontSize: titleFontSize,
    fontWeight: 'bold',
    marginBottom: marginBottom,
    color: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: textFontSize,
    color: 'black',
    lineHeight: lineHeight,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: 100,
    marginBottom: marginBottom,
    backgroundColor: '#41B6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: buttonTextFontSize,
    color: 'white',
  },
});
