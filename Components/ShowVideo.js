import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Container from '../Common/Container';
import Video from 'react-native-video';
const ShowVideo = () => {
  StatusBar.setBarStyle('light-content');
  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Video
        controls
        source={require('../Assets/Song/Saveme.mp3')}
        style={{ width: 300, height: 50 }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ShowVideo;
