// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import { useLocalSearchParams } from "expo-router";
// import { router } from "expo-router";
// import { CustomButton } from "@/components";
// import { useCart } from "@/context/CartContext";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { cardContent } from "@/data/cardContent";

// const ProductScreen = () => {
//     const { id } = useLocalSearchParams<{ id: string }>();
//     const productId = Number(id);
//     const item = cardContent[productId];
//     const { addToCart } = useCart();

//     if (!item) {
//         return (
//             <View className="items-center justify-center flex-1 bg-white">
//                 <Text className="text-xl font-semibold text-black">
//                     Product not found
//                 </Text>
//             </View>
//         );
//     }

//     const handleAdd = () => {
//         addToCart({ ...item, quantity: 1 }); // Assuming item has id, name, price, image
//     };

//     return (
//         <View className="flex-1 bg-white">
//             <View className="relative w-full h-full">
//                 {/* Product Image */}
//                 <Image
//                     source={item.image2}
//                     resizeMode="cover"
//                     className="w-full h-[36%] absolute"
//                 />

//                 {/* Top Icons */}
//                 <View className="absolute flex-row justify-between w-full px-3 mt-8">
//                     <TouchableOpacity onPress={() => router.push("/home")}>
//                         <View className="bg-[#00000044] p-2 rounded-2xl">
//                             <AntDesign name="left" size={29} color="white" />
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => router.push("/(protected)/(tabs)/cart")}
//                     >
//                         <View className="bg-[#00000044] p-2 rounded-2xl">
//                             <Ionicons
//                                 name="bag-handle-outline"
//                                 size={29}
//                                 color="white"
//                             />
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//                 {/* Product Info */}
//                 <ScrollView className="absolute bottom-0 h-2/3 w-full bg-[#EAECCC] rounded-t-3xl p-4">
//                     <View className="relative flex flex-row justify-between">
//                         <Text className="w-3/4 p-2 mt-6 text-4xl text-fontPrimary-0 font-regularFont tracking-tighter2">
//                             {item.name}
//                         </Text>
//                         <Text className="bg-[#9EDC88] text-fontPrimary-0 text-4xl font-regularFont tracking-tighter2 mt-6 p-2 rounded-2xl">
//                             {item.price} ₹
//                         </Text>
//                     </View>

//                     <View className="flex flex-row gap-1 mt-3 ml-2">
//                         {[...Array(4)].map((_, index) => (
//                             <AntDesign
//                                 key={index}
//                                 name="star"
//                                 size={24}
//                                 color="#FFC300"
//                             />
//                         ))}
//                         <AntDesign name="star" size={24} color="#ffffff" />
//                         <Text className="text-xl tracking-tighter font-regularFont ml-7">
//                             {item.estimatedTime}
//                         </Text>
//                     </View>

//                     <View className="mt-8">
//                         <Text className="text-2xl font-regularFont">
//                             {item.description}
//                         </Text>
//                     </View>

//                     <View className="mt-10">
//                         <CustomButton
//                             title="Add to bag"
//                             className="self-center w-3/4 p-3"
//                             onPress={handleAdd}
//                         />
//                     </View>
//                 </ScrollView>
//             </View>
//         </View>
//     );
// };

// export default ProductScreen;

import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { resolveCard } from "@/utils/resolveCard";
import AntDesigns from "@expo/vector-icons/AntDesign";
import { CustomButton } from "@/components";
import { useCart } from "@/context/CartContext";
import { cardContent } from "@/data/cardContent";
import { products } from "@/data/product";

const ProductScreen = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const card = resolveCard(Number(id));

    if (!card) {
        return (
            <View className="items-center justify-center flex-1">
                <Text className="text-red-500">Product not found.</Text>
            </View>
        );
  }
  const { productId } = card;

    const { addToCart } = useCart();
    const item = products[Number(productId)];

    const handleAdd = () => {
        addToCart({ ...item, quantity: 1 }); // Assuming item has id, name, price, image
    };
    return (
        <View className="flex-1 bg-white">
            <View className="relative w-full h-full">
                {/* Product Image */}
                <Image
                    source={item.image2}
                    resizeMode="cover"
                    className="w-full h-[36%] absolute"
                />

                {/* Top Icons */}
                <View className="absolute flex-row justify-between w-full px-3 mt-8">
                    <TouchableOpacity onPress={() => router.push("/home")}>
                        <View className="bg-[#00000044] p-2 rounded-2xl">
                            <AntDesign name="left" size={29} color="white" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push("/(protected)/(tabs)/cart")}
                    >
                        <View className="bg-[#00000044] p-2 rounded-2xl">
                            <Ionicons
                                name="bag-handle-outline"
                                size={29}
                                color="white"
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Product Info */}
                <ScrollView className="absolute bottom-0 h-2/3 w-full bg-[#EAECCC] rounded-t-3xl p-4">
                    <View className="relative flex flex-row justify-between">
                        <Text className="w-3/4 p-2 mt-6 text-4xl text-fontPrimary-0 font-regularFont tracking-tighter2">
                            {item.name}
                        </Text>
                        <View>
                            <Text className="bg-[#9EDC88] text-fontPrimary-0 text-4xl font-regularFont tracking-tighter2 mt-6 p-2 rounded-2xl">
                                {item.price} ₹
                            </Text>
                        </View>
                    </View>

                    <View className="flex flex-row gap-1 mt-3 ml-2">
                        {[...Array(4)].map((_, index) => (
                            <AntDesign
                                key={index}
                                name="star"
                                size={24}
                                color="#FFC300"
                            />
                        ))}
                        <AntDesign name="star" size={24} color="#ffffff" />
                        <Text className="text-xl tracking-tighter font-regularFont ml-7">
                            {item.estimatedTime}
                        </Text>
                    </View>

                    <View className="mt-8">
                        <Text className="text-2xl font-regularFont">
                            {item.description}
                        </Text>
                    </View>

                    <View className="mt-10 mb-64">
                        <CustomButton
                            title="Add to bag"
                            className="self-center w-3/4 p-3"
                            onPress={handleAdd}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default ProductScreen;
