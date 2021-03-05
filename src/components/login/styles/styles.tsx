import { StyleSheet } from "react-native";

export const singInStyles = StyleSheet.create({
  inputUsername: {
    backgroundColor: "#535353",
    borderRadius: 6,
    color: "#ffffff",
    height: 45,
    marginTop: 15,
    textAlign: "center",
    width: 300,
  },
  singInButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop: 25,
    padding: 10,
    height: 45,
    width: 300,
  },
  singInButtonLabel: {
    color: "#000",
    padding: 5,
  },
  loginHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#191414",
    marginTop: 100,
  },

  loginHeaderText: {
    color: "#fff",
    fontSize: 16,
    borderBottomColor: "#1DB954",
    borderBottomWidth: 2,
  },
});
