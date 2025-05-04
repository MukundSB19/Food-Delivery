import { View, Text } from "react-native";
import { AppScreenWrapper } from "@/components/shared";

const Cart = () => {
    return (
        <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
            <View>
                <Text>Cart</Text>
            </View>
        </AppScreenWrapper>
    );
};

export default Cart;
