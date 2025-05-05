import { View, Text, FlatList } from 'react-native'
import FoodItemCard from './ui/FoodItemCard';
import { foods } from '@/data/foods';

const PopularFood = () => {
  return (
      <View className="mt-6 p-4">
          <Text className="text-xl font-bold mb-4">Popular Foods</Text>
          <FlatList
              data={foods}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <FoodItemCard item={item} />}
              showsVerticalScrollIndicator={false}
          />
      </View>
  );
}

export default PopularFood;