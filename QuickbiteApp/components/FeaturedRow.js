import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestrauntCard from "./RestrauntCard";
import featureroww from "../featurerow.json"

const FeaturedRow = ({ id, title, description }) => {

  const data = featureroww

  if(id==="1")
  {
    restrauntrow = data[2]
  }
  else if(id==="2"){
    restrauntrow = data[1]
    
  }
  else if(id==="3")
  {
    restrauntrow = data[0]
  }
  

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg text-[#355C7D]">{title}</Text>

      </View>

      <Text className="text-xs text-[#5f707f] px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        
        {restrauntrow.map(row=>(
                <RestrauntCard
                key={row.id}
                id={row.id}
                imgUrl={row.imgUrl}
                title={row.title}
                rating={row.rating}
                genre={row.genre}
                address={row.address}
                short_description={row.short_description}
                deshes={row.deshes}
                />
              ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;


