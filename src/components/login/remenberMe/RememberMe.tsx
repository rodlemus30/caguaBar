import React, { useState } from "react";
import { Switch, View, StyleSheet, Text } from "react-native";

const RememberMe = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Remember me</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#1DB954" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      ></Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 20,
    justifyContent: "center",
  },

  text: {
    color: "#e0e0e0",
    fontSize: 16,
    marginRight: 10,
  },
});

export default RememberMe;
