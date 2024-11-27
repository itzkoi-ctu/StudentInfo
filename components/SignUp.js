import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../Config/firebaseConfig";
export default function SignUp(
    {navigation}
 ){
    const [email,setEmail]= useState()
    const [password, setPassword]= useState()

    const handleSignUp = async ()=>{
        try{
            await createUserWithEmailAndPassword(auth, email,password)
            Alert.alert("Thông báo", "Đăng ký thành công!")
            navigation.navigate("Login");
        }catch(error){
            Alert.alert("Có lỗi xảy ra",error.message)
        }

    }

    return(
        <KeyboardAvoidingView 
            keyboardVerticalOffset={20}
            behavior= {Platform.OS == "ios" ? "padding" : "height" }
            style={{flex: 1,}}
            
            
        >        
        <View style={{ padding: 20, flex: 1}}>
            <View style={styles.title}>
                <Text style={{fontSize:30}}>Chào mừng!</Text>
                <Text style={{fontSize: 16, color: "grey"}}>Đăng ký để tiếp tục</Text>
            </View>
            <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Nhập tài khoản"
                    value={email}
                        onChangeText={(value)=> setEmail(value)}
                    />
                    <TextInput style={styles.input} placeholder="Nhập mật khẩu"
                        value={password}
                    onChangeText={(value)=> setPassword(value)}
                />

                <TouchableOpacity style={styles.button}
                    onPress={()=> handleSignUp()}
                >
                    <Text style={styles.signUp}>Đăng ký</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center", padding: 20}}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={{fontSize: 15}}>Trở lại đăng nhập</Text>
                </TouchableOpacity>
            </View>

            
        </View>
        </KeyboardAvoidingView>

    )
}
const styles= StyleSheet.create({
    title: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 10,
        

    },
    inputContainer: {
        flex: 2,
        justifyContent: "flex-start"
    },
    input:{
        padding:10,
        marginTop: 10,
        width: "100%",
        
        backgroundColor: "#f1f1f1",
        borderRadius: 10,
        height: 50,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor:"#1E90FF",
        borderRadius: 8,
        marginTop: 20,

    },
    signUp:{
        fontSize: 18,
        color: 'white',
    }
})
