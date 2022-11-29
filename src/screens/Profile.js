import React, { Profiler } from "react";
import {View,Text} from 'react-native' 
const Profile=({route,navigation})=>{
    console.log(route.params)
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",}}>
            <View style={{backgroundColor:"green",width:400,height:500,justifyContent:"center",alignItems:"center"}}>
            <Text>Name:{route.params.userName}</Text>
            <Text>Email:{route.params.userEmail}</Text>
            <Text>Password:{route.params.userPassword}</Text>
            </View>
        </View>
    )
}
export default Profile;