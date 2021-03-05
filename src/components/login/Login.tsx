import React from "react";
import { View } from "react-native";
import LoginHeader from "./loginHeader/LoginHeader";
import SingContainer from "./singContainer/SingContainer";

const Login = () => {
  return (
    <View style={{ backgroundColor: "#191414" }}>
      <LoginHeader></LoginHeader>
      <SingContainer></SingContainer>
    </View>
  );
};

export default Login;
