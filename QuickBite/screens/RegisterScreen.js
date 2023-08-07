import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert
  } from "react-native";
  import { useState } from "react";
  import React from "react";
  import {
    EnvelopeIcon,
    KeyIcon,
    PhoneIcon,
    UserIcon,
  } from "react-native-heroicons/solid";
  import { useNavigation } from "@react-navigation/native";
  import {createUserWithEmailAndPassword} from "firebase/auth"
  import {FIREBASE_AUTH, auth, db} from "../FirebaseConfig"
  import { doc, setDoc } from "firebase/firestore";
  
  const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const navigation = useNavigation();

    const auth = FIREBASE_AUTH;
    const register = async() => {
        if(email === "" || password === "" || phone === ""){
          Alert.alert(
            "Invalid Details",
            "Please fill all the details",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }

        try{
            const response = await createUserWithEmailAndPassword(auth,email,password);
        }catch(error){
            alert("SignIn Failed");
        }

      }
  
    return (
      <SafeAreaView className="flex-1 bg-white">
        <KeyboardAvoidingView>
          <View className="justify-center items-center mt-44">
            <Text className="text-[#3b7eba] font-bold text-xl">Register</Text>
            <Text className="text-[#3b7eba] font-bold text-base mt-2">
              Register Your Account Here!
            </Text>
          </View>
  
          <View className="mt-10 mx-16">
            <View className="flex-row items-center">
              <UserIcon size={25} color={"#3b7eba"} />
              <TextInput className=" border-b-2 w-60 ml-3 text-base" placeholder="Name" 
              value={name}
              onChangeText={(text) => setName(text)}/>
            </View>
          </View>
  
          <View className="mt-10 mx-16">
            <View className="flex-row items-center">
              <EnvelopeIcon size={25} color={"#3b7eba"} />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                className=" border-b-2 w-60 ml-3 text-base"
                placeholder="Email"
              />
            </View>
          </View>
  
          <View className="mt-10 mx-16">
            <View className="flex-row items-center">
              <KeyIcon size={25} color={"#3b7eba"} />
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                className=" border-b-2 w-60 ml-3 text-base"
                placeholder="Password"
              />
            </View>
          </View>
  
          <View className="mt-10 mx-16">
            <View className="flex-row items-center">
              <PhoneIcon size={25} color={"#3b7eba"} />
              <TextInput className=" border-b-2 w-60 ml-3 text-base" placeholder="Phone Number" 
              value={phone}
              onChangeText={(text) => setPhone(text)}/>
            </View>
          </View>
  
          <TouchableOpacity onPress={register} className="bg-[#3b7eba] mx-32 mt-12 mb-10 rounded-lg p-3">
            <Text className="text-white font-bold text-lg text-center">Register</Text>
          </TouchableOpacity>
  
          <View className="items-center">
            <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
              <Text className="text-[#3b7eba] font-bold text-base">Aldready have an Account? Login Now!</Text>
            </TouchableOpacity>
          </View>
  
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  