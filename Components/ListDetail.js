import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';

const ListDetail = ({navigation, route}) => {
  const { item } = route?.params;
  StatusBar.setBarStyle('dark-content');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
               Go Back
            </Text>
        </TouchableOpacity>
      <Image style={{width: 100, height: 100}} source={{uri: item.url}} />
      <Text>
          {item.id}
      </Text>
      <Text>
          {item.title}
          </Text>
    </View>
  );
};

export default ListDetail;
