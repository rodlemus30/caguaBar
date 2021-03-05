import React from "react";
import { Alert, Button, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import RememberMe from "../remenberMe/RememberMe";
import { singInStyles } from "../styles/styles";

const SingIn = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        marginTop: 50,
      }}
    >
      <TextInput
        style={singInStyles.inputUsername}
        placeholder="username"
        placeholderTextColor="#fff"
      ></TextInput>
      <TextInput
        style={singInStyles.inputUsername}
        placeholder="password"
        placeholderTextColor="#fff"
      ></TextInput>
      <RememberMe></RememberMe>

      <TouchableOpacity style={singInStyles.singInButton}>
        <Text style={singInStyles.singInButtonLabel}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingIn;
