import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems, removeFromBasket } from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed,setIsPressed]=useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state)=>selectBasketItems(state,id));
  const addItemToBasket=()=>{
    dispatch(addToBasket({id, name, description, price, image}));
  }

  const removeItemFrombasket=()=>{

    dispatch(removeFromBasket({id}));
  };
  return (
    <>
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} 
    className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1 text-[#233e55]">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="pt-2 text-[#233e55]">
            <Currency quantity={price} currency="USD" />
          </Text>
        </View>
        <View>
          <Image
            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            source={{ uri: image }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </View>
    </TouchableOpacity>

    {isPressed&& (
      <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
          <TouchableOpacity 
          disabled={!items.length}
          onPress={removeItemFrombasket}>
            <MinusCircleIcon color={items.length > 0? "#355C7D":"gray"} 
            size={40}/>
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon color={"#355C7D"} size={40}/>
          </TouchableOpacity>
        </View>
      </View>
    )}
    </>
  );
};

export default DishRow;
