import React, {useState,useEffect} from 'react';
import { View,TouchableOpacity,Text,ImageBackground,Image,StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import picmain from './picture/pic_main.png'
import iconBack from './picture/iconBack.png'
import iconEdit from './picture/iconEdit.png'
import iconPhone from './picture/iconPhone.png'
import iconEmail from './picture/iconEmail.png'
import sepThanh from './picture/sepThanh.png'

function MyProfile({navigation}) {
    const [name,setName] = useState(null)
    const [position,setPosition] = useState(null)
    const [phone,setPhone] = useState(null)
    const [email,setEmail] = useState(null)

    const AsyncLoad = async() => {
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
        }catch(error) {
            alert('error')
        }
        
    }
    useEffect(() => {
        AsyncLoad()
    },[])
    return (
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1}} source={picmain}>
                <LinearGradient colors={['#2D79E6', '#053476']} style={styles.viewTop}>
                 <TouchableOpacity onPress={() => navigation.push('profile')}>  
                     <Image source={iconBack}/> 
                     </TouchableOpacity> 
                    <Text style={styles.textEdit}>
                        My Profile
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('editprofile')}>
                        <Image style={styles.imgEdit} source={iconEdit}/> 
                        </TouchableOpacity> 

                </LinearGradient>
                <View style={styles.viewImg}>
                <View style={styles.viewImage}>
                    <Image style={styles.imgView} source={sepThanh} />
                </View>
                </View>
            </ImageBackground>
            <View style={styles.body}>
                <View style={styles.viewName}>
                    <Text style={styles.textName}>
                        {name && name}
                    </Text>
                    <Text style={styles.textPosition}>
                        {position && position}
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.viewBottom}>
                        <Image source={iconPhone} />
                        <Text style={styles.textPhone}>
                            {phone && phone}
                        </Text>
                        </View>
                    
                    <View style={styles.viewEmail}>
                        <Image source={iconEmail} />
                        <Text style={styles.textEmail}>
                            {email && email}
                        </Text>
                    </View>
                    </View>
                </View>
                <View style={styles.viewBottomVersion}>
                    <Text style={styles.textVersion}>
                        Version 1.2.3
                    </Text>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    viewBottomVersion: {
        alignItems: 'center',
    },
    textVersion:{
        color:'#B0BED4',
        paddingBottom:10,
    },
    viewEmail: {
        flexDirection:'row',
        marginTop:20
    },
    viewBottom: {
        flexDirection:'row',
        marginTop:20
    },
    viewImg:{
        alignItems: 'center',
        flex:1
    },
    imgView:{
        zIndex:1,
        marginTop:-65,
    },
    textEmail:{
        paddingLeft:10,
        color:'#66AAFC',
    },
    textPhone:{
        paddingLeft:10,
        color:'#66AAFC',
    },
    viewImage:{
        width:150,
        height:150,
        backgroundColor:'#B0BED4',
        borderRadius:75,
        borderWidth:2,
        borderColor:'white',
        marginTop:20,
        zIndex:3,
    },
    viewName:{
        alignItems: 'center',
        marginBottom:20
    },
    bottom:{
        borderTopWidth:1,
        borderColor:'#B0BED4',
        
    },
    textPosition:{
        color:'#B0BED4',
        marginTop:6,
    },
    textName:{
        fontSize:18,
        color:'#66AAFC',
        marginTop:10
    },
    body:{
        flex:2,
        paddingLeft:30,
        paddingRight:30,
        zIndex:2,
        marginTop:50,
    },
    imgEdit:{
        width:16,
        height:16
    },
    textEdit:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
    },
    viewTop:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        backgroundColor:'#2D79E6',
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        paddingBottom:10,
    }
})
export default MyProfile