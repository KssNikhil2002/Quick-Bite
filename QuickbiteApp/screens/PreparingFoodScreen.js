import { View, Text, TouchableOpacity,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

const PreparingFoodScreen = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("DeliveryScreen")
        },4000)
    },[]);
  return (
    <SafeAreaView className="bg-[#00abe0] items-center flex-1 justify-center">
        <Animatable.Image
        source={require("../assets/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-98 my-5"/>
        <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            className="text-lg my-10 text-white font-bold text-center">
            Waiting for the Restraunt to Confirm
        </Animatable.Text>
        <Progress.Bar width={200} indeterminate={true} color='white'/>
    </SafeAreaView>
  )
}

export default PreparingFoodScreen