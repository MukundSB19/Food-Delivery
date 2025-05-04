import { View, Text } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";

const settings = () => {
    return (
        <AppScreenWrapper>
            <View>
                <Text>settings</Text>
                <DrawerComponent />
            </View>
        </AppScreenWrapper>
    );
};

export default settings;
