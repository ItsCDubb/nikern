import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    aspectRatio: 1,
    width: "40%",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  size: {
    color: "gray",
    fontSize: 16,
  },
  quantity: {
    color: "gray",
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default styles;
