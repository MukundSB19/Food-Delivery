import { View, Text } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";

const bookMark = () => {
  return (
    <AppScreenWrapper>
      <View>
        <Text>bookMark</Text>
        <Text>Liked products</Text>
        <Text>bookMark</Text>
        <Text>Liked products</Text>
        <Text>bookMark</Text>
        <Text>Liked products</Text>
        <DrawerComponent />
      </View>
    </AppScreenWrapper>
  );
};

export default bookMark;
