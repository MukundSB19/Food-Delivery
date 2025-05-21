import { View, Text, Image, TouchableOpacity } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";
import { CustomButton, InputField } from "@/components/ui";
import { images } from "@/constants";
import Entypo from "@expo/vector-icons/Entypo";

const Account = () => {
  return (
    <AppScreenWrapper>
      <View className=" mt-4 flex justify-center items-center">
        <Text className="text-3xl font-regularFont tracking-tighter text-center bg-[#00000044] px-2 py-2 rounded-xl color-white">
          Account
        </Text>
      </View>
      <View className="flex items-center mt-10 ">
        <Image
          source={require("@/assets/images/user.jpg")}
          className="w-[120] h-[120] rounded-full "
        />
        <View className="mt-4 gap-4">
          <InputField
            placeholder="Esther Howard"
            containerStyle="w-[90%] rounded-xl  px-4 "
            label="Name"
            labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
            icon={images.EditIcon}
            iconStyle="w-[30] h-[30] "
            editable={false}
          />
          <InputField
            placeholder="estherhoward@gmail.com"
            containerStyle="w-[90%] rounded-xl px-4"
            label="Email"
            icon={images.EditIcon}
            iconStyle="w-[30] h-[30] "
            labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
            editable={false}
          />
          <InputField
            placeholder="+91 8632878333"
            containerStyle="w-[90%] rounded-xl px-4"
            label="Phone number"
            icon={images.EditIcon}
            iconStyle="w-[30] h-[30]"
            labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
            editable={false}
          />
        </View>
      </View>

      <CustomButton
        title="Your Orders"
        className="mx-5 mt-10"
        textStyle="self-start  py-4"
        IconRight={images.RightAngle}
        IconRightStyle="h-[38] w-[38] "
      />
      <CustomButton
        title="Notifications"
        className="mx-5 mt-5"
        textStyle="self-start  py-4"
        IconRight={images.RightAngle}
        IconRightStyle="h-[38] w-[38] "
      />
      <CustomButton
        title="Address"
        className="mx-5 mt-5"
        textStyle="self-start  py-4"
        IconRight={images.RightAngle}
        IconRightStyle="h-[38] w-[38] "
      />
      <CustomButton
        title="Payment Method"
        className="mx-5 mt-5"
        textStyle="self-start  py-4"
        IconRight={images.RightAngle}
        IconRightStyle="h-[38] w-[38] "
      />
    </AppScreenWrapper>
  );
};

export default Account;
