import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import iconPhone from './picture/iconPhone.png'
import iconEmail from './picture/iconEmail.png'

const FlatListItem = ({ item, routeToProfileInfo }) => {
    return (
        <TouchableOpacity onPress={() => routeToProfileInfo && routeToProfileInfo ()}>
        <View style={styles.container} >
            <View>
                <Image source={item.img} />
            </View>
            <View style={{padding:5}} >
                <View style={styles.viewName}>
                    <View style={styles.innerViewName}>
                        <Text style={styles.textName}>
                            {item.name}
                        </Text>
                        <Text style={styles.textFirstName}>
                            {item.firstName}
                        </Text>
                    </View>
                    <View style={{padding:5}}>
                        <Text style={{color:'#B0BED4'}}>
                            {item.position}
                        </Text>
                    </View>
                </View>
                <View >
                    <View style={styles.viewPhone}>
                        <Image source={iconPhone} />
                        <Text style={styles.textPhone}>
                            {item.phone}
                        </Text>
                    </View>
                    <View style={styles.viewEmail}>
                        <Image source={iconEmail}/>
                        <Text style={styles.textEmail}>
                            {item.email}
                        </Text>
                    </View>
                </View>
            </View>
            <View>

            </View>
        </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    textEmail: {
        color: '#66AAFC',
        paddingLeft:10,
    },
    viewEmail: {
        flexDirection: 'row',
        padding:5
    },
    textPhone: {
        color: '#66AAFC',
        paddingLeft:10,
    },
    viewPhone: {
        flexDirection: 'row',
        padding:5,
        paddingTop:10
    },
    textFirstName: {
        fontSize:16,
        paddingLeft:3,
        color:'#B0BED4'
    },
    textName: {
        color:'#66AAFC',
        fontWeight:'bold',
        fontSize:16
    },
    innerViewName: {
        flexDirection: 'row',
        paddingLeft:5 
    },
    viewName: {
        borderBottomWidth: 1,
        borderColor:'#EDF2F9',
    },
container:{
    flexDirection: 'row',
    backgroundColor:'white', 
    paddingTop:10,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius: 10, 
    marginBottom: 10,
    zIndex:10,
}
})
export default FlatListItem