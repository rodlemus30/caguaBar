import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { singInStyles } from "../styles/styles";
import { AntDesign } from "@expo/vector-icons";

const LoginHeader = () => {
  return (
    <View style={singInStyles.loginHeaderContainer}>
      <AntDesign name="barschart" size={24} color="#1DB954" />{" "}
      <Text style={{ color: "#fff", fontSize: 24 }}>CaguaBar</Text>
    </View>
  );
};

export default LoginHeader;
