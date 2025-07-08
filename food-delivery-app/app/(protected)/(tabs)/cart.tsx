import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import { useCart } from "@/context/CartContext";
import { CustomButton } from "@/components/ui";
import { AppScreenWrapper } from "@/components";
import { icons, others } from "@/constants";
// import { Minus, Plus, Trash2 } from "lucide-react-native";

const Cart = () => {
  const { state, updateQuantity, removeFromCart, totalPrice, clearCart } =
    useCart();

  const handleIncrease = (id: string) => {
    const item = state.items.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecrease = (id: string) => {
    const item = state.items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const renderItem = ({ item }: any) => (
    <ScrollView>
      
      <View className="flex-row items-center justify-between mb-4 bg-white p-8 border rounded-2xl shadow">
        <View className="flex-row items-center">
          {item.image && (
            <Image
              source={item.image}
              className="w-20 h-20 rounded-xl"
              resizeMode="cover"
            />
          )}
          <View className="pl-4">
            <Text className="text-xl font-regularFont tracking-tighter ">
              {item.name}
            </Text>
            <Text className="text-lg text-gray-500">₹{item.price}</Text>
          </View>
        </View>

        <View className="items-end">
          <View className="flex-row items-center gap-5">
            <TouchableOpacity onPress={() => handleDecrease(item.id)}>
              {/* <Minus size={16} /> */}
              <Text className="text-gray-500 text-4xl">-</Text>
            </TouchableOpacity>
            <Text className="font-semibold">{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleIncrease(item.id)}>
              {/* <Plus size={16} /> */}
              <Text className="text-gray-500 text-2xl">+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => removeFromCart(item.id)}
            className="mt-2"
          >
            {/* <Trash2 size={16} color="red" /> */}
            <Text className="text-white bg-red-600 p-2 rounded-2xl">
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  if (state.items.length === 0) {
    return (
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-xl font-semibold mb-2">Your cart is empty</Text>
        <Text className="text-gray-500 text-center">
          Add some delicious food to get started!
        </Text>
        <Image
          source={others.ShoppingSticker}
          className="w-1/2 h-1/2"
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
      <View className="flex-1 p-4">
        <View className="flex justify-between flex-row mb-5 px-2">
          <Text className="text-4xl font-regularFont tracking-tighter2 ">
            Your Cart
          </Text>
          <CustomButton
            className="absolute right-2 bottom-0 px-6 py-3"
            onPress={() => clearCart()}
            title="Clear Cart"
            textStyle="text-white text-center w-full font-regularFont tracking-tighter text-lg"
            iconRight={icons.IconDelete}
          ></CustomButton>
        </View>
        <FlatList
          data={state.items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        />

        <View className="absolute bottom-16 left-4 right-4 bg-white p-4 rounded-2xl shadow-lg">
          <View className="flex-row justify-between mb-3">
            <Text className="text-lg font-semibold">Total</Text>
            <Text className="text-lg font-semibold">
              ₹{totalPrice().toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </AppScreenWrapper>
  );
};

export default Cart;
