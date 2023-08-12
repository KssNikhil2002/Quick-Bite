import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-24 w-24 rounded" />
      <Text className="absolute bottom-1 left-5 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
};  

export default CategoryCard;
