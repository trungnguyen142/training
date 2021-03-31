import React, { useState } from 'react';
import {ScrollView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import iconBack from './picture/iconBack.png'

const EditProfileItem = ({navigation,item}) => {

    return (
        <View style={{ flex: 1, }}>
            <View style={styles.viewTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={iconBack} />
                </TouchableOpacity>
                <Text style={styles.textTop}>
                    Edit Profile
                    </Text>
                <View></View>
            </View>
            <View style={{ flex: 5, padding: 40 }}>
                <ScrollView>
                <Text style={styles.textEditProfile}>
                    Name
                </Text>
                <TextInput style={styles.tipEditProfile}
                    placeholder="Type Here"
                    onChangeText={(text) => setName(text)}
                    
                />
                <Text style={styles.textEditProfile}>
                    Postion
                </Text>
                <TextInput style={styles.tipEditProfile}
                    placeholder="Type Here"
                    onChangeText={(text) => setPosition(text)}
                />
                <Text style={styles.textEditProfile}>
                    Phone
                </Text>
                <TextInput style={styles.tipEditProfile}
                    placeholder="Type Here"
                    onChangeText={(text) => setPhone(text)}

                />
                <Text style={styles.textEditProfile}>
                    Email
                </Text>
                <TextInput style={styles.tipEditProfile}
                    placeholder="Type Here"
                    onChangeText={(text) => setEmail(text)}

                />

                <TouchableOpacity onPress={() => AsyncSave()} style={styles.touchSave}>
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
        borderColor: 'grey'

    }
})
export default EditProfileItem