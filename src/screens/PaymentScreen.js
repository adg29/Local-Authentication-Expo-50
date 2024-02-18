import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  View,
  Button,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import CardSVG from "../components/CardSVG";

const { width, height } = Dimensions.get("window");
export default function PaymentScreen({ setIsAuthenticated }) {
  const myImage = require("../../assets/3.jpg");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Vault</Text>

      <Image
        source={myImage}
        style={[
          styles.image,
          {
            width: width * 0.5,
            height: width * 0.5,
            borderRadius: height * 0.5,
          },
        ]} // Adjusted to be responsive
      />
      <Text style={{ color: "gray", fontWeight: "bold", marginTop: 15 }}>
        Identity{" "}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 15 }}>
        Robert Downey, Jr.{" "}
      </Text>
      <Text style={{ fontSize: 55, fontWeight: "500", marginBottom: 15 }}>
        $50.00
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Add a note"
        placeholderTextColor="gray"
      />
      <CardSVG />
      <TouchableOpacity
        onPress={() => setIsAuthenticated(false)}
        style={styles.btn}
      >
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    height: 50,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#00000010",
    marginBottom: 20,
  },
  image: {},
  btn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0893FC",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    marginTop: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 15,
    paddingBottom: 20,
  },
});
