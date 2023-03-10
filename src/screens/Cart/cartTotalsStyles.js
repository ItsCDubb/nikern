import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  totalsContainer: {
    paddingTop: 10,
    margin: 20,
    borderTopWidth: 1,
    borderColor: "gainsboro",
  },
  row: {
    flexDirection: "row",
    marginVertical: 2,
    justifyContent: "space-between",
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
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
