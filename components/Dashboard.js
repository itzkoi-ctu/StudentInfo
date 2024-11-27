import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../Config/firebaseConfig";



export default function Dashboard(){
    const [studentCode, setStudentCode]= useState();
    const [studentName, setStudentName]= useState();
    const [studentClass, setStudentClass] = useState()

    const postData= async ()=>{
        try{
            const docRef= await addDoc(collection(db,"StudentInfo"),{
                studentCode: studentCode,
                studentName: studentName,
                studentClass: studentClass
            })
        }catch(error){
            Alert.alert("Thông báo", "Lỗi thêm thông tin sinh viên")
        }
        
    }



    return(
        <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
            <View>
            <TextInput  autoCapitalize="words" style={styles.input} title="Id" placeholder="Enter Student Code" value={studentCode} onChangeText={(value)=> setStudentCode(value)} />
                <TextInput style={styles.input} title="Name" placeholder="Enter Student Name" value={studentName} onChangeText={(value)=> setStudentName(studentName)} />
                <TextInput style={styles.input} title="Address" placeholder="Enter Class" value={studentClass} onChangeText={(value)=> setStudentClass(value)} />
        </View>
        <TouchableOpacity  style={styles.button} title="Add Data" onPress={()=> postData() } >
                  <Text>Add Data</Text>
                </TouchableOpacity>
        </View>
    )
}
const styles= StyleSheet.create({
    input:{
        padding:10,
        marginTop: 10,
        width: "100%",
        
        backgroundColor: "#D3D3D3",
        borderRadius: 10,
        height: 50,
    },
})