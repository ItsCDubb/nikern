import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  selectShippingPrice,
  selectSubtotal,
  selectTotal,
} from "../../store/cartSlice";
import styles from "./cartTotalsStyles";

const totals = () => {
  const subtotal = useSelector(selectSubtotal);
  const shippingFee = useSelector(selectShippingPrice);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal: </Text>
        <Text style={styles.text}>${subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Shipping: </Text>
        <Text style={styles.text}>${shippingFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total: </Text>
        <Text style={styles.textBold}>${total}</Text>
      </View>
    </View>
  );
};

export default totals;
