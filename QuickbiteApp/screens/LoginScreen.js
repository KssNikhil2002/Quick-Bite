import { View, Text,SafeAreaView, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { EnvelopeIcon, KeyIcon, PhoneIcon, UserIcon } from 'react-native-heroicons/solid'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, auth } from "../FirebaseConfig";


const LoginScreen = () => {
    const [email,setEmail] = useState("");
    const [loading,setLoading] = useState(false);
    const [password,setPassword] = useState("")
    const navigation=useNavigation();
    
    const auth = FIREBASE_AUTH;

    const signin= async()=>{
        setLoading(true)
        try{
            const response = await signInWithEmailAndPassword(auth,email,password);
        }catch(error){
            alert("SignIn Failed");
        }finally{
            setLoading(false);
        }
    }

  return (
    <SafeAreaView className="flex-1 bg-white">
        {loading?(
            <View className="items-center flex-1 justify-center flex-row">
                <Text className="font-bold">Loading</Text>
                <ActivityIndicator size="large" color={"#a24f5e"}/>
            </View>
            

        ):(
            <KeyboardAvoidingView>
            <View className="justify-center items-center mt-44">
                <Text className="text-[#3b7eba] font-bold text-xl">Sign In</Text>
                <Text className="text-[#3b7eba] font-bold text-base">Sign In To Your Account</Text>
            </View>

            
            <View className='mt-10 mx-20'>
                <View className="flex-row items-center">
                    <EnvelopeIcon size={25} color={"#3b7eba"}/>
                    <TextInput value={email} onChangeText={(text)=>setEmail(text)} className=" border-b-2 w-60 ml-3 text-base" placeholder='Email'/>
                </View>
            </View>

            <View className='mt-10 mx-20'>
                <View className="flex-row items-center">
                    <KeyIcon size={25} color={"#3b7eba"}/>
                    <TextInput value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true} className=" border-b-2 w-60 ml-3 text-base"placeholder='Password'/>
                </View>
            </View>

            <TouchableOpacity onPress={signin} className="bg-[#3b7eba] mx-32 mt-12 mb-10 rounded-lg p-3">
                <Text className="text-white font-bold text-lg text-center">Login</Text>
            </TouchableOpacity>

            <View className="items-center">
                <TouchableOpacity onPress={()=>navigation.navigate("RegisterScreen")}>
                    <Text className="text-[#3b7eba] font-bold text-base">Dont have an Account? Register Now!</Text>
                </TouchableOpacity>
            </View>
          

        </KeyboardAvoidingView>
        )}
    </SafeAreaView>
  )
}

export default LoginScreen

