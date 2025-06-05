import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import { faqs } from "@/data/faqData";

export default function FAQScreen() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <AppScreenWrapper>
      <View className="flex flex-row justify-between items-center mx-3 mb-6 mt-2">
        <DrawerComponent />

        <Text className="text-center mr-7 font-regularFont tracking-tighter2 text-2xl">
          FAQs
        </Text>
        <View></View>
      </View>
      <ScrollView className="p-4 pb-20">
        {faqs.map((item, index) => {
          const isOpen = expandedIndex === index;
          return (
            <View key={index} className="mb-7 ">
              <TouchableOpacity
                className="flex-row justify-between items-center"
                onPress={() => toggleExpand(index)}
              >
                <Text className="text-lg font-semibold text-gray-800">
                  {item.question}
                </Text>
                {isOpen ? (
                  <ChevronUp size={20} color="#555" />
                ) : (
                  <ChevronDown size={20} color="#555" />
                )}
              </TouchableOpacity>
              {isOpen && (
                <Text className="mt-2 text-gray-600">{item.answer}</Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </AppScreenWrapper>
  );
}
