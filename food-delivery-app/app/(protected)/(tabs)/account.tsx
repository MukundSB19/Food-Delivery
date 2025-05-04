import { View, Text } from "react-native";
import { AppScreenWrapper } from "@/components/shared";

const Account = () => {
    return (
        <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
            <View>
                <Text>Account</Text>
            </View>
        </AppScreenWrapper>
    );
};

export default Account;
