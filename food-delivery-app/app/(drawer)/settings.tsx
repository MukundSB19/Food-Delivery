import { View, Text,Image } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";
import { InputField } from "@/components/ui";
const settings = () => {
    return (
      <AppScreenWrapper>
        <View className="relative flex-row gap-32">
          <View className="self-start">
            <DrawerComponent />
          </View>

          <View className="items-center">
            <Text className="text-3xl font-regularFont tracking-tight ">
              Settings
            </Text>
          </View>
        </View>
        <View className="flex items-center mt-10">
          <Image
            source={require("@/assets/images/user.jpg")}
            className="w-[120] h-[120] rounded-full "
          />
          <View className="mt-4 gap-4">
            <InputField
              placeholder="Esther Howard"
              containerStyle="w-[95%] rounded-xl px-4"
              label="Name"
              labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
            />
            <InputField
              placeholder="estherhoward@gmail.com"
              containerStyle="w-[95%] rounded-xl px-4"
              label="Email"
              labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
            />
            <InputField
              placeholder="+91 8632878333"
              containerStyle="w-[95%] rounded-xl px-4"
              label="Phone number"
              labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
            />
          </View>
        </View>
      </AppScreenWrapper>
    );
};

export default settings;
