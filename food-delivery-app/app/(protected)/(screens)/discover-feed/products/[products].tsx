import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router";
import { allItems } from "@/data";

const  productScreen = () => {

    const { slug, description } = useLocalSearchParams();
    
      const filteredItems = allItems.filter((item) => item.category === slug);

  return (
    <View>
   <Text>pakistan ka ma ka bhosda</Text>
    </View>
  )
}

export default productScreen;