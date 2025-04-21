import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { CardsType } from "@/types/types";
import { useRef, useState } from "react";


type ingredientType = {
  name: string;
  quantity: string;
};
const Cards = ({ listObject }: { listObject: CardsType[] }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIngredients, setSelectedIngredients] =
    useState<ingredientType[]>();

  const openModal = (ingredients: ingredientType[]) => {
    setSelectedIngredients(ingredients);
    setModalVisible(true);
  };
  const [ingredientTitle,setIngredientTitle] = useState("");

  return (
    <View>
      <FlatList
        className="pl-3 mt-10 mb-28"
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
            {/* // TODO: implement on press functionality */}
            <TouchableOpacity className="absolute m-5 bg-[#00000066] px-3 py-2 rounded-2xl">
              <Text className="text-lg tracking-tight rounded-lg font-boldFont color-white ">
                {item.category}
              </Text>
            </TouchableOpacity>
            <Text className="text-center font-boldFont tracking-tight ml-2 p-1 rounded-lg bg-[#00000066] color-white absolute bottom-16">
              {item.text}
            </Text>
            {/* // TODO: implement on press functionality */}
            <TouchableOpacity
              onPress={() => {
                setIngredientTitle(item.text2);
                openModal(item.ingredients);
              }}
              className="absolute p-2 px-3 mx-2 rounded-lg shadow-2xl bottom-3 bg-buttonPrimary-0 shadow-black "
            >
              <Text className="color-white font-regularFont">Ingredients</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        
      >
        <View className="items-center justify-center flex-1 bg-black/50">
          <View className="bg-[#EAECCC] p-6 rounded-2xl w-[80%] shadow-lg">
            <Text  className="mb-4 text-xl font-boldFont tracking-tight"  >
              {ingredientTitle}
            </Text>
            <View className="flex flex-row justify-between pl-3 mt-4"> 
              <Text className="font-boldFont text-xl tracking-tight">Ingredient</Text>
              <Text className="font-boldFont text-xl tracking-tight">Quantity (grams)</Text>
            </View>
            <FlatList
              className="pl-3 mt-5 mb-8"
              
              data={selectedIngredients}
              renderItem={({ item }) => (
                <View className="flex flex-row justify-between mb-1">
                  
                  <Text className="font-regularFont tracking-tight text-lg">{item.name}</Text>
                  <Text  className="font-regularFont tracking-tight text-lg">{item.quantity}</Text>
                </View>
              )}
            ></FlatList>
             
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="px-4 py-2 rounded-2xl bg-buttonPrimary-0"
            >
              <Text className="text-center text-white">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cards;
