import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

interface Props {
  title: string;
  imageUrl: string;
  category: string;
}

export default function CategoryCard({ title, imageUrl, category }: Props) {
  return (
    <Link href={`/discover-feed/${category}`} asChild>
      <TouchableOpacity className="w-40 m-2 rounded-xl overflow-hidden bg-white shadow">
        <Image source={{ uri: imageUrl }} className="h-24 w-full" />
        <View className="p-2">
          <Text className="font-semibold text-center">{title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}