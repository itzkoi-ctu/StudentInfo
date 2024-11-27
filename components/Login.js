import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../Config/firebaseConfig";
import Fontisto from '@expo/vector-icons/Fontisto';
export default function Login(
    {navigation}
){
    
    const [email,setEmail]= useState()
    const [password, setPassword]= useState()

    const logo= require("../assets/logo.png")
    const handleLogin= async () =>{
       try{
        await signInWithEmailAndPassword(auth,email,password);
        navigation.navigate("Dashboard")
       }catch(error){
        Alert.alert("Lỗi đăng nhập","Sai tài khoản hoặc mật khẩu")
       }

    }
    const handleSignUp= ()=>{
        navigation.navigate("SignUp")
    }


    const handleFogotPassword= ()=>{
        Alert.alert("Chưa có ní ơi!")
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={20}
            style={{flex: 1, padding: 20}}
        >

      
        <View style={styles.titleContainer}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.textH1}>Đăng nhập</Text>
            <Text style={{fontSize:20, marginTop: 20, }}>Chào mừng đến với StudentInfo</Text>

        </View>
        <View style={styles.inputContainer}>
    <View style={styles.inputWrapper}>
        <Fontisto name="email" size={24} color="black" style={{marginRight: 10}} />
        <TextInput 
            placeholder="Email" 
            style={styles.input}
            value={email}
            onChangeText={(value)=> setEmail(value)}  
            autoCapitalize="none"  
        />
    </View>
    
    <View style={styles.inputWrapper}>
        <Fontisto name="locked" size={24} color="black" style={{marginRight: 10}} />
        <TextInput 
            placeholder="Password" 
            style={styles.input}
            value={password}
            onChangeText={(value)=> setPassword(value)}
            autoCapitalize="none"
            secureTextEntry= {true}
        />
    </View>
</View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={{alignItems: "center",justifyContent: "center", padding: 10}}
            
                onPress={()=> handleFogotPassword()}
            >
                
                <Text>Quên mật khẩu</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={()=> handleLogin()}
                >
                <Text style={styles.loginText}>Đăng nhập</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row", padding:5, justifyContent: "center"}}><Text style={{fontSize: 16}}>Chưa có tài khoản? </Text>
                <TouchableOpacity onPress={()=> handleSignUp()}>
                    <Text style={{color: "#1E90FF", fontSize: 16}}> Đăng ký</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
        
        
        </KeyboardAvoidingView>
    )
}
const styles= StyleSheet.create({
    logo:{
        marginTop: 20,
        width: 200,
        height: 200,
        resizeMode: "contain"

    },
    titleContainer:{
        flex: 2,
        
        padding: 5,
        justifyContent:"flex-end",
        alignItems: "center",
        paddingHorizontal: 10,
    },  
    textH1:{
        fontSize: 35,
        fontWeight: "bold",

    },
    // container:{
    //     flex: 1
    // },
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
    },
    input:{
        flex: 1,
        paddingVertical: 10,
    },
    buttonContainer:{
        flex: 1,
        justifyContent: "flex-start",
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        width: "100%",
        height: 50,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor:"#1E90FF",
        borderRadius: 8,

    },
    loginText:{
        fontSize: 18,
        color: 'white',
    }

})

