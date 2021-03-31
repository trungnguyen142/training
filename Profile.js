import React, {useState,useEffect} from 'react';
import { TextInput, FlatList, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FlatListItem from './FlatListItem.js'
import iconSearch from './picture/iconSearch.png'
import iconThanh from './picture/iconThanh.png'
import iconLogout from './picture/iconLogout.png'
import Linh from './picture/Linh.png'
import Hieu from './picture/Hieu.png'
import iconUser from './picture/iconUser.png'
import Thu from './picture/Thu.png'

function Profile({ route, navigation }) {
    const [name,setName] = useState(null)
    const [position,setPosition] = useState(null)

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
        }catch(error) {
            alert('error')
        }
        
    }
    useEffect(() => {
        AsyncLoad()
    },[])

    const people = [
        {
            key: 1,
            name: "Linh",
            firstName: "Nguyen Khanh",
            position: "Delivery Manager",
            img: Linh,
            phone: "+84 123 0000",
            email: "linhnguyenkhanh@fruitfu l.io",
           
        },
        {
            key: 2,
            name: "Hieu",
            firstName: " Truong",
            img: Hieu,
            position: "Technical Leader",
            phone: "+84 123 0000",
            email: "hieutruong@fruitful.io",
        },
        {
            key: 3,
            name: "Thu",
            firstName: "Vu Giang",
            img: Thu,
            position: "QA Team Leader",
            phone: "+84 123 0000",
            email: "thuvugiang@fruitful.io"
        },
        {
            key: 4,
            name: "Luong",
            firstName: "Le",
            img: iconUser,
            position: "Mobile Team Leader",
            phone: "+84 123 0000",
            email: "luongle@fruitful.io"
        },

    ]

    const [datapeople,useDatapeople] = useState(people)



    const routeToProfileInfo = (personalInfo) => {
        navigation.navigate('personalinfo', { info: personalInfo })
        
    }
    return (
        <LinearGradient style={styles.container} colors={['#2D79E6', '#053476']}>
            <View style={styles.top}>
                <TextInput style={styles.inputSearch}
                    placeholder="Search"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"

                />
                <TouchableOpacity>
                <Image style={styles.imgSearch} source={iconSearch} />
                </TouchableOpacity>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('myprofile')}style={styles.viewPic}>
                    <Image style={{marginTop:-15}} source={iconThanh} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.view2}>
                <View>
                <View style={{flexDirection:'row',}}>
                <Text style={styles.textThanh}>{name && name}</Text>
                </View>
                <Text style={{color:'#C2DDFF'}}>{position && position}</Text>
                </View>
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('main')} style={styles.touchLogout}>
                        <Text style={styles.textLogout}>
                            Log out
                        </Text>
                        <Image source={iconLogout} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={{marginTop:20}}>  
                    <FlatList
                        data={datapeople}
                        keyExtractor={(item) => item.key}
                        renderItem={({item})  => <FlatListItem item={item} routeToProfileInfo={() => routeToProfileInfo(item)} />}
                    />
                    </View>
            </View>
            
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    textLogout: {
        color:'white',
        paddingRight:10
    },
    imgSearch: {    
        marginLeft: -30,
        marginBottom:10
    },
    textFirtname:{
        paddingLeft:5,
        fontSize:18,
        color:'white'
    },
    textThanh:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
    view2:{
        marginBottom:20,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    touchLogout:{
        flexDirection: 'row',
        width:100,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'white',
        borderRadius:30
    },
    viewPic: {
        marginLeft: 30,
        width:45,
        height: 45,
        borderRadius: 50,
        backgroundColor: '#7DA9DD',
        borderWidth: 1,
        borderColor: 'white'
    },
    inputSearch: {
        width: 250,
        height: 40,
        backgroundColor: '#3D8BFF',
        borderRadius: 30,
        paddingLeft: 10,
    },
    body: {
        flex: 5,
        backgroundColor: '#E2E9F5',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
    },
    top: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
    }
})
export default Profile