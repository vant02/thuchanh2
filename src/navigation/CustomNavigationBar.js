import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ContactsScreen from "../screens/ContactsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import colors from '../utility/colors';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import User from "../screens/User";
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const ProScreen = () =>{
  return(
    
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={
        {
          headerTintColor: "white",
          headerStyle: {backgroundColor:colors.blue},
          headerTitleAlign: "center",  
        }
      }
    >
      <Stack.Screen name="Contacts" component={ContactsScreen} options={{title:"Contacts"}}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
    
  )

}
const CustomNavigationBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contacts"  component={ProScreen} options={{tabBarIcon: "home"}}/>
        <Tab.Screen name="User"  component={User} options={{tabBarIcon: "home"}}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default CustomNavigationBar

const styles = StyleSheet.create({});