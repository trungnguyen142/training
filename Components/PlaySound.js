// import React, { useState, useEffect } from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'
// import Container from '../Common/Container'
// import Icon from 'react-native-vector-icons/Ionicons'
// import Saveme from '../Assets/Song/Saveme.mp3'
// import TrackPlayer, { Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player';
// import Slider from '@react-native-community/slider';

// const tracks = [
//     {
//         id: 1,
//         url: require('../Assets/Song/Saveme.mp3'),
//         title: "con cac",
//         artist: "cc"
//     }
// ]

// const PlaySound = (props) => {

//     useEffect(() => {
//         setupPlayerMusic()
//         return (() => TrackPlayer.destroy())
//     }, [])
//     const playbackState = usePlaybackState()

//     const setupPlayerMusic = async () => {
//         try {
//             await TrackPlayer.setupPlayer()
//             await TrackPlayer.add(tracks)
//         } catch (error) {
//             console.log('errror', error);
//         }
//     }

//     const handlePlayBack = async (playBack) => {
//         const currentTrack = await TrackPlayer.getCurrentTrack()
//         if (currentTrack !== null) {
//             if (playBack == State.Paused) {
//                 await TrackPlayer.play()
//             }
//             else {
//                 await TrackPlayer.pause()
//             }
//         }
//     }
//     const progess = useProgress()

//     return (
//         <Container style={{ paddingTop: 100, paddingHorizontal: 10 }}>
//             <View style={{ borderRadius: 30, borderWidth: 1, borderColor: '#FF9900', height: 50, paddingHorizontal: 10, justifyContent: 'center' }}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
//                     <TouchableOpacity onPress={() => handlePlayBack(playbackState)}>
//                         <Icon name={playbackState === State.Playing ? "pause" : "play"} size={30} color="#FF9900" />
//                     </TouchableOpacity>
//                     {/* <Slider
//                         style={{}}
//                         value={progess.position}

//                     /> */}
//                     <Text style={{ color: 'grey' }}>
//                         {new Date(progess.position * 1000).toISOString().substr(14, 5)} / {new Date((progess.duration - progess.position) * 1000).toISOString().substr(14, 5)}
//                     </Text>
//                 </View>
//             </View>
//         </Container>
//     )
// }

// export default PlaySound


// const [pause, setPause] = useState(false)
//     const [time, setTime] = useState("")
//     const [totalTime, setTotalTime] = useState("")
//     const [progress, setProgress] = useState(0)
//     const getMinutesFromSeconds = (millis: any) => {
//         const currentMinutes = millis.currentTime >= 60 ? Math.floor(millis.currentTime / 60) : 0
//         const currentSeconds = Math.floor(millis.currentTime - currentMinutes * 60)
//         const currentTotalTime = (currentSeconds == 60 ? (currentMinutes + 1) + ":00" : currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds)
//         setTime(currentTotalTime)
//         setProgress(millis.currentTime / 60)
//         const minutes = millis.seekableDuration >= 60 ? Math.floor(millis.seekableDuration / 60) : 0
//         const seconds = Math.floor(millis.seekableDuration - minutes * 60)
//         const totalTime = `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`
//         setTotalTime(totalTime)
//     }


{/* <Video source={{ uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }}
onEnd={() => setPause(false)}
audioOnly
paused={!pause}
repeat={pause}
// onLoad={(duration) => console.log('duration', duration)}
onProgress={se => getMinutesFromSeconds(se)}
/> */}