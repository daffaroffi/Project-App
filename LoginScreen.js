// LoginScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { TextInput, Button, Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>

      <TextInput
        label="Username"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        left={<TextInput.Icon icon="lock" />}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <View style={styles.row}>
        <View style={styles.rememberRow}>
          <Checkbox
            status={rememberMe ? "checked" : "unchecked"}
            onPress={() => setRememberMe(!rememberMe)}
          />
          <Text>Remember me</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        onPress={() => console.log("Login pressed")}
        style={styles.loginBtn}
      >
        Log in
      </Button>

      <Text style={styles.or}>- or -</Text>

      <Button
        mode="outlined"
        icon="google"
        onPress={() => console.log("Login with Google")}
        style={styles.googleBtn}
      >
        Login in with Google
      </Button>

      <View style={styles.signupRow}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f5e9", // hijau muda
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgot: {
    color: "red",
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "green",
    borderRadius: 30,
    paddingVertical: 5,
  },
  or: {
    textAlign: "center",
    marginVertical: 15,
    color: "gray",
  },
  googleBtn: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 5,
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signup: {
    color: "red",
    fontWeight: "bold",
  },
});
