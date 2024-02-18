import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
const myImage = require("../../assets/2.jpg");
const { width, height } = Dimensions.get("window");

export default function Auth({ onAuthenticate }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={myImage}
        style={[styles.image, { width: width * 1, height: height * 0.5 }]} // Adjusted to be responsive
      />
      <Text style={styles.title}>InstantVerify</Text>
      <Text style={styles.description}>
        Secure your experience with lightning-fast identity verification, all in
        one tap.
      </Text>
      <TouchableOpacity onPress={onAuthenticate} style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Added to center content on the screen
    justifyContent: "center",
    flex: 1, // Make sure the container takes full height
  },
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
  image: {
    // Removed fixed sizes
    resizeMode: "cover", // Adjust the resizeMode to maintain aspect ratio
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 24, // Adjusted for better scaling
    fontWeight: "400",
    marginVertical: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 16, // Adjusted for better scaling
    color: "gray",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 50,
  },
});
