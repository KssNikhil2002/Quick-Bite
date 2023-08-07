import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const ProfileScreen = () => {
  const user = FIREBASE_AUTH.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    FIREBASE_AUTH.signOut();
  };
  return (
    <SafeAreaView className="">
        <TouchableOpacity onPress={()=>navigation.goBack()} className="p-6 pl-10">
            <ArrowLeftIcon size={30} color={"#355C7D"}/>
        </TouchableOpacity>
      <View className="items-center justify-center mt-56">
        <TouchableOpacity className="items-center pb-10">
          <Text className="font-bold mb-3 text-[#355C7D] text-xl">Welcome {user?.email}</Text>
          <Text className="font-bold mb-3 text-[#355C7D] text-lg"> Hope Your Enjoying your meal!!</Text>
          <Text className="font-bold mb-3 text-[#355C7D] text-lg"> Go Back and Order More Food Now!</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={signOutUser} className="bg-[#355C7D] px-8 rounded-lg pt-2 pb-3">
          <Text className="font-bold text-xl text-white">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
