import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Modal
} from "react-native";
import { CardsType } from "@/types/types";
import { useState } from "react";
const Cards = ({ listObject }: { listObject: CardsType[] }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState<
        string | null
    >(null);

    const openModal = (ingredients: string) => {
        setSelectedIngredients(ingredients);
        setModalVisible(true);
    };

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
                            onPress={() =>
                                openModal(
                                    item.ingredients ||
                                    "no ingredients available"
                                )
                            }
                            className="absolute p-2 px-3 mx-2 rounded-lg shadow-2xl bottom-3 bg-buttonPrimary-0 shadow-black "
                        >
                            <Text className="color-white font-regularFont">
                                Ingredients
                            </Text>
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
                    <View className="bg-white p-6 rounded-2xl w-[80%] shadow-lg">
                        <Text className="mb-4 text-lg font-bold">
                            Ingredients
                        </Text>
                        <Text className="mb-6 text-gray-700">
                            {selectedIngredients}
                        </Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            className="px-4 py-2 rounded-md bg-buttonPrimary-0"
                        >
                            <Text className="text-center text-white">
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Cards;
