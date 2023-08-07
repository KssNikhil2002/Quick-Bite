import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";

import SearchFilter from "../components/SearchFilter";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" bg-[#355C7D] pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 pl-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-white p-4 rounded-full "
        />

        <View className="flex-1">
          <Text className="font-bold text-white text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl text-white">
            Current Location <ChevronDownIcon size={20} color={"white"} />
          </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("ProfileScreen")}>
        <UserIcon size={35} color={"white"} />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-2 pb-4 mx-4 pl-2">
        <View className="flex-row flex-1 space-x-2 bg-white p-3">
          <MagnifyingGlassIcon color="#355C7D" size={20} />
          <TextInput
            placeholder="Restraunts and Cusines"
            keyboardType="default"
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholderTextColor={"#355C7D"}
          />
        </View>
        <AdjustmentsVerticalIcon color={"white"} size={32} className=""/>
      </View>

      {input ? (
        <View className=" pb-96 bg-white">
          <SearchFilter input={input} />
        </View>
      ) : (
        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Categories />
          <FeaturedRow
            id="1"
            title="Popular This Week!"
            description="Checkout our Popular places and foods!"
          />
          <FeaturedRow
            id="2"
            title="Tasty Discounts"
            description="Everyons been enjoying these discounts!"
          />
          <FeaturedRow
            id="3"
            title="Offers near you!"
            description="Why not support your local restraunt tonight!"
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
