import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";
import { CustomButton, InputField } from "@/components/ui";
import { icons, others } from "@/constants";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import {
  AddressModal,
  NotificationModal,
  PaymentModal,
} from "@/components/modals";
import { router } from "expo-router";

const index = () => {
  const [notificationModalVisible, setNotificationModalVisible] =
    useState(false);
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);

  return (
    <AppScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" mt-4 flex justify-center items-center ">
          <Text className="text-3xl font-regularFont tracking-tighter text-center bg-[#00000044] px-2 py-2 rounded-xl color-white">
            Account
          </Text>
        </View>
        <View className="flex items-center mt-10 ">
          <Image
            source={others.UserPhoto}
            className="w-[120] h-[120] rounded-full "
          />
          <View className="mt-4 gap-4">
            <InputField
              placeholder="Esther Howard"
              containerStyle="w-[90%] rounded-xl  px-4 "
              label="Name"
              labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
              iconLeft={icons.IconEdit}
              iconLeftStyle="w-[30] h-[30] "
              editable={false}
            />
            <InputField
              placeholder="estherhoward@gmail.com"
              containerStyle="w-[90%] rounded-xl px-4"
              label="Email"
              iconLeft={icons.IconEdit}
              iconLeftStyle="w-[30] h-[30] "
              labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
              editable={false}
            />
            <InputField
              placeholder="+91 8632878333"
              containerStyle="w-[90%] rounded-xl px-4"
              label="Phone number"
              iconLeft={icons.IconEdit}
              iconLeftStyle="w-[30] h-[30]"
              labelStyle=" ml-5 mb-2 font-regularFont tracking-tighter text-lg"
              editable={false}
            />
          </View>
        </View>
        <View className="mb-20">
          <CustomButton
            title="Your Orders"
            className="mx-5 mt-10"
            textStyle="py-4"
            iconRight={icons.IconArrowRight}
            iconRightStyle="h-[38] w-[38] "
            containerStyle="w-full px-5"
            onPress={() => router.push("/account/order")}
            iconRightPress={() => router.push("/account/order")}
          />
          <CustomButton
            title="Notifications"
            className="mx-5 mt-5"
            textStyle="py-4"
            iconRight={icons.IconArrowRight}
            iconRightStyle="h-[38] w-[38] "
            containerStyle="w-full px-5"
            onPress={() => setNotificationModalVisible(true)}
            iconRightPress={() => setNotificationModalVisible(true)}
          />
          <CustomButton
            title="Address"
            className="mx-5 mt-5"
            textStyle="py-4"
            iconRight={icons.IconArrowRight}
            iconRightStyle="h-[38] w-[38] "
            containerStyle="w-full px-5"
            onPress={() => router.push("/account/address")}
            iconRightPress={() => router.push("/account/address")}

            // onPress={() => setAddressModalVisible(true)}
            // iconRightPress={() => setAddressModalVisible(true)}
          />
          <CustomButton
            title="Payment Method"
            className="mx-5 mt-5"
            textStyle="py-4"
            iconRight={icons.IconArrowRight}
            iconRightStyle="h-[38] w-[38] "
            containerStyle="w-full px-5"
            onPress={() => router.push("/account/payment")}
            iconRightPress={() => router.push("/account/payment")}
          />
        </View>
        <View>
          <NotificationModal
            animationType="fade"
            visible={notificationModalVisible}
            transparent={true}
            onRequestClose={() => {
              setNotificationModalVisible(false);
            }}
            statusBarTranslucent
          >
            <TouchableOpacity
              onPress={() => setNotificationModalVisible(false)}
            >
              <Entypo name="circle-with-cross" size={29} color="black" />
            </TouchableOpacity>
          </NotificationModal>
          <AddressModal
            animationType="fade"
            visible={addressModalVisible}
            transparent={true}
            onRequestClose={() => {
              setAddressModalVisible(false);
            }}
            statusBarTranslucent
          >
            <TouchableOpacity onPress={() => setAddressModalVisible(false)}>
              <Entypo name="circle-with-cross" size={29} color="black" />
            </TouchableOpacity>
          </AddressModal>
          <PaymentModal
            animationType="fade"
            visible={paymentModalVisible}
            transparent={true}
            onRequestClose={() => {
              setAddressModalVisible(false);
            }}
            statusBarTranslucent
          >
            <TouchableOpacity onPress={() => setPaymentModalVisible(false)}>
              <Entypo name="circle-with-cross" size={29} color="black" />
            </TouchableOpacity>
          </PaymentModal>
        </View>
      </ScrollView>
    </AppScreenWrapper>
  );
};

export default index;
