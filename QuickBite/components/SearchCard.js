import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
const SearchCard = ({
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
      onPress={() => {
        navigation.navigate("Restraunt", {
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
        });
      }}
      className=" bg-white shadow pl-5 border p-4 border-gray-200"
    >
      <View className="flex-row">

        <View className=" flex-1 px-2">
          <Text className="font-bold text-lg">{title}</Text>

          <View className="flex-row items-center space-x-1 pl-4">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">
              <Text className="text-green-500">{rating}</Text> · {genre}
            </Text>
          </View>

          <View className="flex-row items-center space-x-1 pl-4">
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">Nearby · {address}</Text>
          </View>
        </View>

        <Image
            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            source={{ uri: imgUrl }}
            className="h-20 w-20 bg-gray-30"
          />
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;
