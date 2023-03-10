import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../../store/productsSlice";
import styles from "./styles";

const Products = () => {
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default Products;
