import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import iconBack from './picture/iconBack.png'

function EditProfile({ navigation }) {
    const [name, setName] = useState()
    const [position, setPosition] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const asyncSave = async () => {
        try {
            await AsyncStorage.setItem('name', name)
            await AsyncStorage.setItem('position', position)
            await AsyncStorage.setItem('phone', phone)
            await AsyncStorage.setItem('email', email)
            alert('Save Success')
            navigation.push('myprofile')
        } catch (error) {
            alert('error')
        }

    }


    const getObjectFromAsyncStorage = async () => {
        try {
            let name = await AsyncStorage.getItem('name')
            if (name !== null) {
                setName(name)
            }
            let position = await AsyncStorage.getItem('position')
            if (position !== null) {
                setPosition(position)
            }
            let phone = await AsyncStorage.getItem('phone')
            if (phone !== null) {
                setPhone(phone)
            }
            let email = await AsyncStorage.getItem('email')
            if (email !== null) {
                setEmail(email)
            }
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getObjectFromAsyncStorage()
    }, [])

    return (
        <View style={{ flex: 1, }}>
            <LinearGradient style={styles.viewTop} colors={['#2D79E6', '#053476']}>
                <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                    <Image source={iconBack} />
                </TouchableOpacity>
                <Text style={styles.textTop}>
                    Edit Profile
                    </Text>
                <View></View>
            </LinearGradient>
            <View style={styles.body}>
                <ScrollView>
                <Text style={styles.textEditProfile}>
                    Name
                </Text>
                <TextInput style={styles.tipEditProfile}
                    placeholder="Type Here"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    placeholderTextColor={'#B0BED4'}
                    
                />
                <Text style={styles.textEditProfile}>
                    Postion
                </Text>
                <TextInput style={styles.tipEditProfile}
                    placeholder="Type Here"
                    onChangeText={(text) => setPosition(text)}
                    value= {position}
                    placeholderTextColor={'#B0BED4'}
                    
                />
                <Text style={styles.textEditProfile}>
                    Phone
                </Text>
                <TextInput style={styles.tipEditProfile}
                    placeholder="Type Here"
                    onChangeText={(text) => setPhone(text)}
                    value= {phone}
                    placeholderTextColor={'#B0BED4'}

                />
                <Text style={styles.textEditProfile}>
                    Email
                </Text>
                <TextInput style={styles.tipEditProfile}
                    placeholder="Type Here"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholderTextColor={'#B0BED4'}

                />
                <TouchableOpacity onPress={() => asyncSave()} style={styles.touchSave}>
                    <Text style={styles.textSave}>
                        Save
                    </Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textEditProfile: {
        marginTop: 20,
        color: '#2D79E6',
        paddingLeft: 10,
    },
    viewTop: {
        flex: 1,
        backgroundColor: '#2D79E6',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: 'flex-end',
        paddingBottom:20,
    },
    textTop: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textSave: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    touchSave: {
        width: 300,
        height: 40,
        backgroundColor: '#1354B0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 20,
    },
    tipEditProfile: {
        borderWidth: 1,
        marginTop: 10,
        width: 300,
        height: 40,
        borderRadius: 12,
        paddingLeft: 10,
        borderColor: '#B0BED4',
        color:'rgba(0,0,0,0.8)'
    },
    body:{
        flex:6,
        alignItems:'center'
    }
})
export default EditProfile