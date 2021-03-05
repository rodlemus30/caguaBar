import React from "react";
import { Text, View } from "react-native";
import Login from "./src/components/login/Login";
import MainNavigator from "./src/navigations/mainNavigator/MainNavigator";

const App = () => {
  return (
    <View style={{ backgroundColor: "#191414", flex: 1 }}>
      <Login></Login>
    </View>
  );
};

export default App;
