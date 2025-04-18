import { View, Modal, ModalProps, Text, TouchableOpacity } from "react-native";
import InputField from "./InputField";
import SearchBar from "./SearchBar";
import { useState } from "react";
import SearchFunctionality from "./SearchFunctionality";

const LocationModal = ({ children, ...props }: ModalProps) => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <Modal {...props}>
      <View className="flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]">
        <View className="w-[380] p-[20] bg-white rounded-3xl items-center ">
          <View className="flex flex-row items-center w-full justify-between px-3">
            <Text className="color-fontPrimary-0 font-regularFont tracking-tighter2 text-3xl">
              Select Your Location
            </Text>
            {children}
          </View>
          <View>
            {/* <SearchBar
              clicked={clicked}
              setClicked={setClicked}
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
            /> */}
            <SearchFunctionality />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;
