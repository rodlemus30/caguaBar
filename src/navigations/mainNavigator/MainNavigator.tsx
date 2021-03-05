import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../components/login/Login";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>

        <Stack.Screen name="Laogin" component={Login}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
