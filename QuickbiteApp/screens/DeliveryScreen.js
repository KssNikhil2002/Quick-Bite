import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestraunt } from '../features/restrauntSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const Restraunt = useSelector(selectRestraunt);
  return (
    <View className="bg-[#355C7D] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} className="flex-1">
                <XMarkIcon color={"white"} size={38}/>
            </TouchableOpacity>
            <Text className="text-white font-extrabold text-lg">Order help</Text>
        </View>

        <View className="bg-white z-50 shadow-md mx-5 my-2 p-6 rounded-md">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-600">Estimated Time</Text>
                    <Text className="text-4xl font-bold text-[#355C7D]">30-45 Minutes</Text>
                </View>
                <Image
            source={{uri:"https://links.papareact.com/fls"}}
            className="h-20 w-20"
            />
            </View>
            <Progress.Bar size={30} color="#355C7D" indeterminate={true}/>
            <Text className="text-gray-500 mt-3">Your order is being prepared</Text>
        </View>
      </SafeAreaView>
      <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      className="flex-1 mt-0 z-0"
      mapType='mutedStandard'
      >

      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image source={{uri:"https://links.papareact.com/wru"}}
        className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5">

        </Image>
        <View className="flex-1">
            <Text className="text-lg text-[#355C7D]">K S S Nikhil</Text>
            <Text className="text-gray-500">Your Rider</Text>
        </View>
        <Text className="text-[#355C7D] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen