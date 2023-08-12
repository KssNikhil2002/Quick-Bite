import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React,{useEffect, useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, StarIcon, MapPinIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestraunt } from '../features/restrauntSlice';

const RestrauntScreen = () => {
    const dispatch = useDispatch();
    const {
    params: {
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
    }} = useRoute();

    useEffect(()=>{
        dispatch(setRestraunt({
            id, 
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            deshes,
        })
        );
    },[dispatch]);

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
  return (
    <>
        <BasketIcon/>
        <ScrollView>
            <View className = "relative">
                <Image source ={{uri:imgUrl}
                }
                className="w-full h-56 bg-gray-300 p-4"/>
                <TouchableOpacity 
                onPress={navigation.goBack}
                className='absolute top-14 left-5 bg-gray-300 rounded-full'>
                    <ArrowLeftIcon size={25} color={"#355C7D"}/>
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold text-[#243f56]">{title}</Text>
                    <View className="flex-row space-x-2 my-2">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color='#355C7D' opacity={0.9} size={22}/>
                            <Text className="text-xs text-[#355C7D]">
                                <Text className="text-[#355C7D]">{rating}</Text> · {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon color='#355C7D' opacity={0.9} size={22}/>
                            <Text className="text-xs text-[#355C7D]">Nearby · {address}</Text>
                        </View>

                    </View>
                    <Text className="text-[#355C7D] mt-2 pb-4 pl-1">{short_description}</Text>
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-500">
                    <QuestionMarkCircleIcon color='#355C7D' opacity={0.9} size={20}/>
                    <Text className="flex-1 pl-2 text-md text-[#355C7D] font-bold">Have a Food Allergy?</Text>
                    <ChevronRightIcon color={"#355C7D"}/>
                </TouchableOpacity>

            </View>
            <View className="pb-36">
                <Text className="px-4 pt-6 mb-3 font-bold text-[#355C7D] text-xl">Menu</Text>

                {deshes.map(dish=>(
                    <DishRow 
                    key={dish.id}
                    id={dish.id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}/>
                ))}
            </View>

        </ScrollView>
    </>
  )
}

export default RestrauntScreen;