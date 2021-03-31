import React from 'react';
import {Alert, KeyboardAvoidingView, ScrollView, View, Text, TouchableOpacity, ImageBackground, StyleSheet, TextInput } from 'react-native';
import axios from 'axios'
import md5 from 'md5';
import pictureMain from './picture/splash.png'
function Main({ navigation }) {
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const instance = axios.create({})
    function Axios() {
        instance.post('https://test.prism.horse/api/login', {
                "platformType": 3,
                "platformVersion": "1.0",
                "deviceToken": "02d3cd7cc15a5fd4f58d9b37f998e31d",
                "deviceId": "02d3cd7cc15a5fd4f58d9b37f998e31d"
        }, {
            headers: {
                'X-Auth-Username': email,
                'X-Auth-Password': md5(password)
            },
        })
            .then((response) => {
                console.log(response)
                navigation.navigate('profile')

            }).catch((err) => {
                console.warn('e', err)
            })

    }
    return (

        <ImageBackground style={styles.imgContainer} source={pictureMain}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}>
                <View style={styles.viewBody}>
                </View>
                <ScrollView>
                    <View style={styles.body}>
                        <Text style={styles.textWelcome}>
                            Welcome,
                </Text>
                        <View style={styles.innerBody}>
                            <Text style={styles.text1}>
                                BlueBottle
                    </Text>
                            <Text style={styles.text2}>
                                Toolbox
                    </Text>
                        </View>
                        <TextInput style={styles.tipLogin}
                            placeholder="Email"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput style={styles.tipLogin}
                            placeholder="Password"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry
                        />
                        <View style={styles.touchLogin}>
                            <TouchableOpacity onPress={() => Axios()} style={styles.signIn}>
                                <Text style={styles.textSignin}>
                                    Sign In
                        </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.signInGoogle}>
                                <Text style={styles.textSignInGoogle}>
                                    G+     Sign In With Google+
                    </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    viewBody: {
        flex: 4 
    },
    imgContainer: {
        flex:1,
    },
    textSignInGoogle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    textSignin: {
        fontWeight: 'bold',
        color: '#1354B0',
        fontSize: 16
    },
    signInGoogle: {
        backgroundColor: '#1354B0',
        width: 300,
        height: 50,
        borderRadius: 12,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signIn: {
        backgroundColor: '#F8FBFF',
        width: 300,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    touchLogin: {

    },
    tipLogin: {
        borderWidth: 1,
        borderRadius: 12,
        width: 300,
        height: 50,
        paddingLeft: 10,
        borderColor: 'white',
        marginTop: 10,
        color: 'white',
    },
    text2: {
        color: 'white',
        fontSize: 18,
        marginTop: 5
    },
    text1: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
    },
    textWelcome: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },
    innerBody: {
        flexDirection: 'row',

    },
    body: {
        flex: 1,
        alignItems: 'center',
    },

    container: {
        flex: 1
    }
})

export default Main;