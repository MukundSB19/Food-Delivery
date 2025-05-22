import { View, Text, Modal, ModalProps, Switch } from 'react-native'
import { useState } from 'react';
import {SearchFunctionality} from "@/components";

const NotificationModal = ({children, ...props}:ModalProps) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);
  return (
    <Modal {...props}>
      <View className="flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)] ">
        <View className="w-[90%] p-[20] bg-[#EAECCC] rounded-3xl ">
          <View className="flex flex-row items-center w-full justify-between px-2 ">
            <Text className="color-fontPrimary-0 font-regularFont tracking-tighter2 text-3xl">
              Notifications
            </Text>
            {children}
          </View>
          <View className="flex-row items-center  justify-between mt-5">
            <View>
              <Text className="font-regularFont tracking-tighter text-2xl px-2">
                Enable Notifications
              </Text>
              <Text className="font-regularFont tracking-tighter text-sm px-2">
                You will Receive daily updates
              </Text>
            </View>

            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            ></Switch>
          </View>
          <View className="flex-row items-center  justify-between mt-5">
            <View>
              <Text className="font-regularFont tracking-tighter text-2xl px-2">
                Email Alerts
              </Text>
              <Text className="font-regularFont tracking-tighter text-sm px-2">
                Expect daily updates from us
              </Text>
            </View>

            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            ></Switch>
          </View>
          <View className="flex-row items-center  justify-between mt-5">
            <View>
              <Text className="font-regularFont tracking-tighter text-2xl px-2">
               Order Alerts
              </Text>
              <Text className="font-regularFont tracking-tighter text-sm px-2">
                You will Receive updates every day
              </Text>
            </View>

            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            ></Switch>
          </View>
          <View className="flex-row items-center  justify-between mt-5">
            <View>
              <Text className="font-regularFont tracking-tighter text-2xl px-2">
                General Alerts
              </Text>
              <Text className="font-regularFont tracking-tighter text-sm px-2">
                You will Receive daily updates
              </Text>
            </View>

            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch4}
              value={isEnabled4}
            ></Switch>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default NotificationModal