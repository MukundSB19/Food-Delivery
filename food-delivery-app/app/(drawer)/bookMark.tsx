import { View, Text } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";

const bookMark = () => {
    return (
        <AppScreenWrapper>
            <View>
                <Text>bookMark</Text>
                <DrawerComponent />
            </View>
        </AppScreenWrapper>
    );
};

export default bookMark;
