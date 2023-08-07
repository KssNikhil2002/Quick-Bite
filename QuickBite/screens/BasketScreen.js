import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestraunt } from "../features/restrauntSlice";
import { Basketitems, cleanbasket, removeFromBasket, selectBasketItemsTotal } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restraunt = useSelector(selectRestraunt);
  const items = useSelector(Basketitems);
  const dispatch = useDispatch();
  const total = useSelector(selectBasketItemsTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  useEffect(() => {
    const groupedItems = items.reduce((results,item) => {
      (results[item.id] = results[item.id]||[]).push(item);
      return results;
    },{});
    const map =Object.entries(groupedItems);
    const Itemsfilter=()=>{
      let itemmm=[];
      for(let i=0;i<map.length;i++)
      {
  
          let a ={
            length:map[i][1].length,
            price:map[i][1][0].price,
            imgUrl:map[i][1][0].image,
            name:map[i][1][0].name,
            id:map[i][0],
            id1:map[i][1][0].id
          }
          itemmm.push(a);
  
      }
      return itemmm;
    };
    const ItemsGrouped = Itemsfilter();
    setGroupedItemsInBasket(ItemsGrouped);

  },[items]);

  const clean=()=>{
    navigation.replace("PreparingFoodScreen")
    dispatch(cleanbasket());
  }
  console.log(items.length);
  if(items.length===0)
  {
    navigation.goBack();
  }




  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#355C7D] bg-white shadow-xs"> 
          <View>
            <Text className="text-lg font-bold text-center text-[#355C7D]">Basket</Text>
        
          </View>
          <TouchableOpacity onPress={navigation.goBack} 
          className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color={"#355C7D"} height={50} width={50}/>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
          <Text className="flex-1 text-[#355C7D]">Delivery in 30 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#355C7D]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y-0 divide">
          {groupedItemsInBasket.map(dish=>(
            <View key={dish.id} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#355C7D]">{dish.length} x</Text>
              <Image
              source={{
                uri:dish.imgUrl
              }}
              className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1 text-[#355C7D]">{dish.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={dish.price} currency="INR"/>
              </Text>
              <TouchableOpacity>
                <Text className="text-[#355C7D] font-semibold"
                onPress={()=>dispatch(removeFromBasket({id:dish.id1}))}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          
    
        </ScrollView>
        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={total} currency="INR"/>
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery</Text>
            <Text className="text-gray-400">
              <Currency quantity={25} currency="INR"/>
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="font-extrabold text-[#355C7D]">Order Total</Text>
            <Text className="font-extrabold text-[#355C7D]">
              <Currency quantity={25+total} currency="INR"/>
            </Text>
          </View>

          <TouchableOpacity onPress={clean} className="rounded-lg bg-[#355C7D] p-4">
            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
