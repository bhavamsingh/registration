import React,{useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Alert ,Dimensions,TextInput} from 'react-native';

const Home = ({navigation}) =>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const handelsubmit=()=>{
        // console.log('Hello')
        navigation.navigate('Profile',{
            userName: name,
            userEmail:email,
            userPassword: password
        })
    }
    return(
        <View>
            <Text>Home Screen</Text>
            <View style={{justifyContent:"center",alignItems:"center"}}>
                <Text style={{marginRight:300}}>Name:</Text>
                <TextInput style={styles.input} placeholder="Enter your Name" value={name} onChangeText={(text)=> setName(text)}/>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
                <Text style={{marginRight:300}}>Email:</Text>
                <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={(text)=> setEmail(text)}/>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
                <Text style={{marginRight:300}}>Password:</Text>
                <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry={true} value={password} onChangeText={(text)=> setPassword(text)}/>
            </View>

            <TouchableOpacity style={styles.submitbutton} onPress={()=> handelsubmit()}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home;
const {width}= Dimensions.get("screen")
const styles= StyleSheet.create({
    input: {
        width:350,
        height: 40,
        borderWidth: 2,
        // marginTop:
        padding:10
    },
    submitbutton:{
        width:"100%",
        padding:10,
        // borderWidth:2,
        backgroundColor:"lightblue",
        marginTop:10,
        borderRadius:30,
        alignItems:"center"
        
    }
})