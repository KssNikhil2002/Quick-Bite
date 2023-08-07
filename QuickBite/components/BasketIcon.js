import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketItemsTotal,
} from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Currency from 'react-currency-formatter'
import { Basketitems } from "../features/basketSlice";

const BasketIcon = () => {
  const basketitems = useSelector(Basketitems);
  const navigation = useNavigation();
  const total = useSelector(selectBasketItemsTotal);
  if(basketitems.length===0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=>navigation.navigate("Basket")} className="mx-5 bg-[#355C7D] p-4 rounded-lg flex-row">
        <Text className="text-white font-extrabold text-lg bg-[#1a4f7c] py-1 px-2">
            {basketitems.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
            View Basket
        </Text>
        <Text className=" text-lg text-white font-extrabold">
            <Currency quantity={total} currency="INR"/>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
