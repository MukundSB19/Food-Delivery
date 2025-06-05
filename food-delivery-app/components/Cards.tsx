import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import { CardContent } from "@/types";
import { router } from "expo-router";

type ingredientType = {
  name: string;
  quantity: string;
};

const Cards = ({ listObject }: { listObject: CardContent[] }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIngredients, setSelectedIngredients] =
    useState<ingredientType[]>();

  const openModal = (ingredients: ingredientType[]) => {
    setSelectedIngredients(ingredients);
    setModalVisible(true);
  };
  const [ingredientTitle, setIngredientTitle] = useState<string | undefined>(
    ""
  );

  return (
    <View>
      <FlatList
        className="pl-3 mt-10"
        horizontal
        data={listObject}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mr-7 ">
            <Pressable
              android_ripple={{ color: "#dddddd" }}
              onPress={() =>
                router.push({
                  pathname: "/discover-feed/products/[products]",
                  params: {
                    products: item.product.category,
                    productId: item.productId,
                  },
                })
              }
            >
              <Image
                className=" w-[183] h-[290]  rounded-3xl"
                resizeMode="cover"
                source={item.product.image}
              />
            </Pressable>
            {/* // TODO: implement on press functionality */}
            <TouchableOpacity className="absolute m-5 bg-[#00000066] px-3 py-2 rounded-2xl">
              <Text className="text-lg tracking-tight rounded-lg font-boldFont color-white ">
                {item.product.category}
              </Text>
            </TouchableOpacity>
            <Text className="text-center font-boldFont tracking-tight ml-2 p-1 rounded-lg bg-[#00000066] color-white absolute bottom-16">
              {item.product.name}
            </Text>
            {/* // TODO: implement on press functionality */}
            <TouchableOpacity
              onPress={() => {
                setIngredientTitle(item.product.text);
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
        statusBarTranslucent
      >
        <View className="items-center justify-center flex-1 bg-black/50">
          <View className="bg-[#EAECCC] p-6 rounded-2xl w-[80%] shadow-lg">
            <Text className="mb-4 text-xl tracking-tight font-boldFont">
              {ingredientTitle && ingredientTitle}
            </Text>
            <View className="flex flex-row justify-between pl-3 mt-4">
              <Text className="text-xl tracking-tight font-boldFont">
                Ingredient
              </Text>
              <Text className="text-xl tracking-tight font-boldFont">
                Quantity (grams)
              </Text>
            </View>
            <FlatList
              className="pl-3 mt-5 mb-8"
              data={selectedIngredients}
              renderItem={({ item }) => (
                <View className="flex flex-row justify-between mb-1">
                  <Text className="text-lg tracking-tight font-regularFont">
                    {item.name}
                  </Text>
                  <Text className="text-lg tracking-tight font-regularFont">
                    {item.quantity}
                  </Text>
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
