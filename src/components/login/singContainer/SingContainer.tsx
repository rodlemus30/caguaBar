import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SingIn from "../singIn/singIn";
import { singInStyles } from "../styles/styles";

const SingContainer = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SingIn></SingIn>
    </View>
  );
};

export default SingContainer;
