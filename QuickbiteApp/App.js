import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import RestrauntScreen from "./screens/RestrauntScreen";
import { Provider } from "react-redux";
import {store} from './store'
import BasketScreen from "./screens/BasketScreen"
import PreparingFoodScreen from "./screens/PreparingFoodScreen";
import DeliveryScreen from "./screens/DeliveryScreen"
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const OutsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={HomeScreen} />
      <InsideStack.Screen name="Restraunt" component={RestrauntScreen} />
      <InsideStack.Screen name="Basket" component={BasketScreen} options={{presentation:"modal", headerShown:false}} />
      <InsideStack.Screen name="PreparingFoodScreen" component={PreparingFoodScreen} options={{presentation:"fullScreenModal", headerShown:false}}  />
      <InsideStack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{presentation:"fullScreenModal", headerShown:false}}  />
      <InsideStack.Screen name="ProfileScreen" component={ProfileScreen} options={{presentation:"fullScreenModal", headerShown:false}}  />
    </InsideStack.Navigator>
  )
}
function OutsideLayout(){
  return(
    <OutsideStack.Navigator>
      <OutsideStack.Screen name="LoginScreen" component={LoginScreen} options={{presentation:"fullScreenModal", headerShown:false}}  />
      <OutsideStack.Screen name="RegisterScreen" component={RegisterScreen} options={{presentation:"fullScreenModal", headerShown:false}}  />
    </OutsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
      setUser(user);
    });
  },[])
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator initialRouteName="outside">
            {user? 
            (
              <Stack.Screen name="Inside" component={InsideLayout} options={{presentation:"fullScreenModal", headerShown:false}}  />
            )
              :
            (
              <Stack.Screen name="outside" component={OutsideLayout} options={{presentation:"fullScreenModal", headerShown:false}}  />
            )}
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
{/* <Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Restraunt" component={RestrauntScreen} />
<Stack.Screen name="Basket" component={BasketScreen} options={{presentation:"modal", headerShown:false}} />
<Stack.Screen name="PreparingFoodScreen" component={PreparingFoodScreen} options={{presentation:"fullScreenModal", headerShown:false}}  />
<Stack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{presentation:"fullScreenModal", headerShown:false}}  />
<Stack.Screen name="LoginScreen" component={LoginScreen} options={{presentation:"fullScreenModal", headerShown:false}}  />
<Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{presentation:"fullScreenModal", headerShown:false}}  /> */}