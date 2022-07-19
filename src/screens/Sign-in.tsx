import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import SButton from '../common/SButton'
import IconSignIn from '../assets/images/Sign-in'
import auth from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { userInfor } from '../features/userSlice'
import {
    KakaoOAuthToken,
    KakaoProfile,
    login,
    logout,
    unlink,
    getProfile

} from '@react-native-seoul/kakao-login'

const SignIn = () => {
    const dispatch = useDispatch()

    GoogleSignin.configure({
        webClientId: '721705116134-6iuel2637iutd30pa05298s64bjtqos9.apps.googleusercontent.com',
    })

    const signInWithKakao = async (): Promise<void> => {
        const token: KakaoOAuthToken = await login()
        // console.log('token', token)
        getKakaoProfile()
    }

    const getKakaoProfile = async (): Promise<void> => {
        const profile: KakaoProfile = await getProfile();
        const action = userInfor(profile?.id)
        dispatch(action)

    };


    const onSignInGoogle = async () => {
        const { idToken } = await GoogleSignin.signIn()
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
        const userSignIn = auth().signInWithCredential(googleCredential)
        userSignIn
            .then(user => {
                const action = userInfor(user?.user?.displayName)
                dispatch(action)
            })
            .catch(err => {
                throw err
            })
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#000000',
            flexDirection: 'column',
            justifyContent: 'space-between'

        }}>
            <Animatable.View animation={'fadeInDown'} duration={800} >
                <Text style={{
                    fontSize: 50,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    Sign-in
                </Text>
                <Text style={{
                    fontSize: 50,
                    color: 'pink',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    Quiz App
                </Text>
            </Animatable.View>
            <Animatable.View
                animation={'fadeInUp'}
                duration={800}
                style={{
                    alignItems: 'center',
                    paddingBottom: 32
                }}
            >
                <SButton
                    onPress={signInWithKakao}
                    source={IconSignIn.Messenger}
                    title={'Kakaotalk'}
                    style={{
                        backgroundColor: 'yellow',
                        borderRadius: 8,
                    }}
                />

                <SButton
                    onPress={onSignInGoogle}
                    source={IconSignIn.SignInGoogle}
                    title={'Google'}
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 8,
                        marginTop: 16,
                    }}
                />
            </Animatable.View>
        </SafeAreaView>
    )
}

export default SignIn