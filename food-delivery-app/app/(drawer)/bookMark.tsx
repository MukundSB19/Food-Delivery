import { View, Text } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";

const bookMark = () => {
  return (
    <AppScreenWrapper>
      <View>
        <Text>bookMark</Text>
        <Text>Liked products</Text>
        <Text>Another Line</Text>
        <Text>Another Line</Text>
        <Text>Another Line</Text>
        <Text>Another Line</Text>
        <DrawerComponent />
      </View>
    </AppScreenWrapper>
  );
};

export default bookMark;
