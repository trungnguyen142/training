import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Animated,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import flower from '../Assets/Picture/flower.jpeg';
const FlatListAnimatedEffect = ({navigation}) => {
  StatusBar.setBarStyle('light-content');
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(1)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${limit}` ).then(data => {
      setList(data?.data);
      setLoading(false)
    });
  }, [limit]);

  const footerComponent = () => {
      return (
          loading ?
          <ActivityIndicator size="large" color="grey" />
          : null
      )
  }

  const handleLoading = () => {
      setLimit(limit + 1)
      setLoading(true)
  }

  const AVATAR_SIZE = 70;
  const SPACING = 20;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        blurRadius={5}
        source={flower}
      />
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0}
        ListFooterComponent={footerComponent}
        onEndReached={handleLoading}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ]

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          })
          const opacity = scrollY.interpolate({
               inputRange: opacityInputRange,
              outputRange: [1,1,1,0]
          })

          return (
              <TouchableOpacity
              onPress={() => navigation.navigate('ListDetail',{item})}
              >
            <Animated.View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 20,
                transform: [{scale}],
                opacity,
              }}>
              <Image
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                }}
                source={{uri: item.url}}
              />
              <View style={{width: '70%', paddingLeft: SPACING}}>
                  <Text style={{ textAlign:'center',color:'red' }}>
                      {item.id}
                  </Text>
                <Text style={{ textAlign:'center' }}>
                    {item.title}
                    </Text>
              </View>
            </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default React.memo(FlatListAnimatedEffect)

const styles = StyleSheet.create({});
