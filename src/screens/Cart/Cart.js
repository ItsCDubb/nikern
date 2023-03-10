import { FlatList, Pressable, Text } from "react-native";
import CartListItem from "../../components/CartListItem";
import cartTotals from "./cartTotals";
import { useSelector } from "react-redux";
import styles from "./styles";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const checkout = () => {
    console.warn("Checkout");
  };
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={cartTotals}
      />
      <Pressable onPress={checkout} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default Cart;
