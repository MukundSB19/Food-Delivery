import { View, Text, Image, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { allItems } from "@/data";
import { CustomButton } from "@/components/ui";
import { AppScreenWrapper } from "@/components/shared";
import { useCart } from "@/context/CartContext";
import { resolveProductById } from "@/utils/resolveCard";
import { Product } from "@/types";

export default function CategoryScreen() {
    const { slug, description } = useLocalSearchParams();
    const { addToCart } = useCart();

    // Filter items by category using resolved product data
    const filteredItems = allItems
        .map((item) => resolveProductById(item.productId))
        .filter((product) => product && product.category === slug) as Product[];

    const handleAdd = (product: Product) => {
        addToCart({ ...product, quantity: 1 });
    };

    const renderItem = ({ item }: { item: Product }) => (
        <View className="flex-row items-center p-4 mb-4 shadow-md bg-slate-100 rounded-3xl">
            <Image
                source={item.image}
                className="w-24 h-20 mr-4"
                resizeMode="contain"
            />
            <View className="flex-1">
                <Text className="mb-1 text-2xl font-regularFont text-fontPrimary-0 tracking-tighter">
                    {item.name}
                </Text>
                <View className="flex-row items-center justify-between my-3">
                    <Text className="text-base text-black bg-[#9EDC88] px-2 py-1 rounded-xl tracking-tighter">
                        Vitamin {item.vitamin}
                    </Text>
                    <CustomButton
                        title="Add to Bag"
                        onPress={() => handleAdd(item)}
                        className="w-[38%] px-3 py-2"
                        textStyle="text-white text-center font-boldFont tracking-tighter text-sm"
                        disabled={false}
                    />
                </View>
                <Text className="bg-[#00000012] self-start px-2 py-1 text-lg rounded-lg mb-3">
                    {item.price} ₹/kg
                </Text>
                <Text className="font-regularFont tracking-tighter text-fontPrimary-0 text-base">
                    {item.description}
                </Text>
            </View>
        </View>
    );

    return (
        <AppScreenWrapper
            gradientColors={["#EAECCC", "#9EDC88"]}
            style={{ marginHorizontal: 13 }}
        >
            <Text className="text-3xl font-regularFont tracking-tighter2 mb-2 mt-6 ml-2 capitalize bg-white p-3 rounded-2xl shadow--2xl text-fontPrimary-0 elevation-xl self-start ">
                Popular {slug}
            </Text>

            <Text className="mb-4 ml-2 tracking-tighter font-regularFont">
                {description}
            </Text>

            {filteredItems.length === 0 ? (
                <Text className="mt-4 text-center text-gray-500">
                    No items found in this category.
                </Text>
            ) : (
                <FlatList
                    data={filteredItems}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 80 }}
                />
            )}
        </AppScreenWrapper>
    );
}
