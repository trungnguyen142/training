import React, {useState,useEffect} from 'react'
import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native'
import picMain from './picture/pic_main.png'
import LinearGradient from 'react-native-linear-gradient';
import iconBack from './picture/iconBack.png'
import iconEdit from './picture/iconEdit.png'
import iconPhone from './picture/iconPhone.png'
import iconEmail from './picture/iconEmail.png'
const PersonalInfo = ({route,navigation}) => {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.top} source={picMain}>
                <LinearGradient style={styles.innerLinear} colors={['#2D79E6', '#053476']}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={iconBack} />
                    </TouchableOpacity>
                    <Text style={styles.textProfile}>
                        My Profile
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('editprofileitem')}>
                    <Image source={iconEdit} />
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{flex:1,}}></View>
            </ImageBackground>
            <View style={styles.body}>
                <View style={styles.innerImg}>
                    <Image style={styles.img} source={route.params.info.img} />
                </View>
                <View style={styles.innerBody}>
                    <Text style={styles.textName}>
                        {route.params.info.name}
                        
                    </Text> 
                    <Text style={styles.textFirtName}>
                        {route.params.info.firstName}
                    </Text>
                </View>
                <View style={styles.innerBody1}>
                    <Text style={styles.textPosition}>
                        {route.params.info.position}
                    </Text>
                </View>
                <View style={styles.viewPhone}>
                    <Image source={iconPhone} />
                    <Text style={styles.textPhone}>
                        {route.params.info.phone}
                    </Text>
                </View>
                <View style={styles.viewEmail}>
                    <Image source={iconEmail} />
                    <Text style={styles.textPhone}>
                    {route.params.info.email}
                    </Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    img:{
        width:130,
        height:120,
    },
    innerImg:{
        width:130,
        height:130,
        backgroundColor: '#B0BED4',
        borderRadius:80,
        marginLeft:90,
        marginTop:-90,
        borderWidth:1,
        borderColor: 'white'
    },
    textPhone:{
        color:'#66AAFC',
        paddingLeft:10
    },
    viewEmail: {
        flexDirection: 'row',
        paddingTop:10
    },
    viewPhone:{
        paddingTop:20,
        flexDirection: 'row',
    },
    textPosition:{
        color:'#B0BED4',
        paddingTop:5,
        paddingBottom:10,
    },
    innerBody1:{
        alignItems: 'center',
        borderBottomWidth:1,
        borderColor:'#B0BED4'
    },
    textName:{
        fontSize:18,
        color:'#66AAFC',
        fontWeight: 'bold',

    },
    textFirtName:{
        fontSize:18,
        color:'#66AAFC',
        paddingLeft:5
    },
    innerBody:{
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textProfile:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    innerLinear:{
        flex:1,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingBottom:20
    },
    body:{
        flex:2,
        paddingLeft:35,
        paddingRight:35,
    },
    top:{
        flex:1,
    },
    container: {
        flex: 1,
    }
})
export default PersonalInfo