import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

const RestrauntCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    deshes,
    long,
    lat,
}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress={()=>{
        navigation.navigate("Restraunt",{
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            deshes,
            long,
            lat,
        })
    }}
    className="bg-white mr-3 shadow">
        <Image
        source={{ uri: imgUrl}}
        className=" h-32 w-64 rounded-sm"/>

        <View className="px-3 pb-4">

            <Text className="font-bold text-lg pt-2 text-[#355C7D]">{title}</Text>

            <View className="flex-row items-center space-x-1 pb-1"> 
                <StarIcon color='#355C7D' opacity={0.9} size={22}/>
                <Text className="text-xs text-[##355C7D]">
                    <Text className="text-[#355C7D]">{rating}</Text> · {genre}
                </Text>
            </View>

            <View className="flex-row items-center space-x-1">
                <MapPinIcon color='#355C7D' opacity={0.9} size={22}/>
                <Text className="text-xs text-[#355C7D]">Nearby · {address}</Text>
            </View>

        </View>
    </TouchableOpacity>
  )
}

export default RestrauntCard