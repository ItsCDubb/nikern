import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontSize: 34,
    fontWeight: "500",
  },
  price: {
    letterSpacing: 1.5,
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    marginVertical: 10,
    lineHeight: 30,
    fontSize: 18,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    width: "60%",
    bottom: 30,
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 10, 0.7)",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
