import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { CardsType } from "@/types/types";

const Cards = ({ listObject }: { listObject: CardsType[] }) => {
  return (
      <FlatList
          className="ml-5 mt-10 mb-28"
          horizontal
          data={listObject}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
              <View className="mr-7 ">
                  <Image
                      className=" w-[183] h-[290]  rounded-3xl"
                      resizeMode="cover"
                      source={item.image}
                  />
                  // TODO: implement on press functionality
                  <TouchableOpacity className="absolute m-5 bg-[#00000066] px-3 py-2 rounded-2xl">
                      <Text className="text-lg font-boldFont tracking-tight rounded-lg  color-white ">
                          {item.category}
                      </Text>
                  </TouchableOpacity>
                  <Text className="text-center font-boldFont tracking-tight ml-2 p-1 rounded-lg bg-[#00000066] color-white absolute bottom-16">
                      {item.text}
                  </Text>
                  // TODO: implement on press functionality
                  <TouchableOpacity className="absolute bottom-3 bg-buttonPrimary-0 p-2 px-3 mx-2 rounded-lg shadow-2xl shadow-black ">
                      <Text className="color-white font-regularFont">
                          Ingredients
                      </Text>
                  </TouchableOpacity>
              </View>
          )}
      />
  );
};

export default Cards;
